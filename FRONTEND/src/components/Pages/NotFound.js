import React from 'react';

function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1 style={{ fontSize: '48px', color: 'red' }}>404</h1>
            <p style={{ fontSize: '24px' }}>Page Not Found</p>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}

export default NotFound;
