const TTL = 30 * 60 * 1000; // 15 minutes

export function getCache(key) {
    try {
        const cached = localStorage.getItem(key);
        if (!cached) return null;

        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp > TTL) {
            localStorage.removeItem(key);
            return null;
        }
        return data;
    } catch {
        return null;
    }
}

export function setCache(key, data) {
    localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
}
