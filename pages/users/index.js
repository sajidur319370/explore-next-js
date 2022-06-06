import Link from 'next/link';
import React from 'react';

const index = ({ users }) => {
    return (
        <div>
            <h2>This is Users main Page:({users.length})</h2>
            {
                users.map(user => <div key={user.id}>
                    <h4>name:{user.name}</h4>
                    <Link href={`/users/${user.id}`}><button>explore</button></Link>
                </div>)
            }
        </div>
    );
};
export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { users: data },
    };
}
export default index;