const http = require('http');

const student = {
    name: 'Denis Grigorovskiy',
    group: 'IA2403',
    speciality: 'Applied Informatics'
};

const courses = [
    {
        title: 'Web Technologies',
        teacher: 'Petrov A.S.',
        credits: 4
    },
    {
        title: 'Database Systems',
        teacher: 'Sidorova E.V.',
        credits: 5
    },
    {
        title: 'Software Engineering',
        teacher: 'Kozlov I.N.',
        credits: 3
    }
];

function formatDateTime(date = new Date()) {
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function logRequest(method, url) {
    console.log(`${method} ${url} | ${formatDateTime()}`);
}

function sendText(res, body, statusCode = 200) {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(body);
}

const server = http.createServer((req, res) => {
    logRequest(req.method, req.url);

    if (req.method === 'GET' && req.url === '/') {
        sendText(res, 'Добро пожаловать! Это учебный HTTP-сервер на Node.js.');
    } else if (req.method === 'GET' && req.url === '/about') {
        sendText(res, 'Lab 1 — простое Node.js-приложение с маршрутизацией и JSON API.');
    } else if (req.method === 'GET' && req.url === '/student') {
        sendText(res, `Студент: ${student.name}, группа ${student.group}`);
    } else if (req.method === 'GET' && req.url === '/api/student') {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(student));
    } else if (req.method === 'GET' && req.url === '/time') {
        sendText(res, `Текущие дата и время: ${formatDateTime()}`);
    } else if (req.method === 'GET' && req.url === '/api/courses') {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(courses));
    } else if (req.method === 'GET' && req.url === '/api/status') {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({
            status: 'ok',
            message: 'Сервер работает',
            serverTime: formatDateTime()
        }));
    } else {
        sendText(res, '404 - Page not found', 404);
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
