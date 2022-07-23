var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "admin",
                date: Date.now(),
                content: "First"
            }
        ]
    },
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
