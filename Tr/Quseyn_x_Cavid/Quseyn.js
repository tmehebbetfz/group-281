const logs = [
  { user: 'Alice', action: 'login',  time: '09:00' },
  { user: 'Bob',   action: 'login',  time: '09:05' },
  { user: 'Alice', action: 'logout', time: '09:30' },
  { user: 'Alice', action: 'login',  time: '10:00' },
  { user: 'Bob',   action: 'logout', time: '10:15' },
  { user: 'Alice', action: 'logout', time: '10:45' },
];

function getUserSessions(logs) {
    const sessions = {};
    logs.forEach(log => {
        const { user, action, time } = log;
        if (!sessions[user]) sessions[user] = [];
        if (action === 'login') {
            sessions[user].push({ login: time, logout: null });
        } else if (action === 'logout') {
            const lastSession = sessions[user].find(s => s.logout === null);
            if (lastSession) lastSession.logout = time;
        }
    });
    return sessions;
}

console.log(getUserSessions(logs));