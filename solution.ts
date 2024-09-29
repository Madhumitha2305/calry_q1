function optimizeBookings(bookings: number[][]): number[][] {
    if (bookings.length === 0) return [];

    // Sort the bookings by start time
    bookings.sort((a, b) => a[0] - b[0]);

    const optimized: number[][] = [];
    let current = bookings[0];

    for (let i = 1; i < bookings.length; i++) {
        const next = bookings[i];
        if (current[1] >= next[0]) {
            current[1] = Math.max(current[1], next[1]);
        } else {
            optimized.push(current);
            current = next;
        }
    }

    optimized.push(current);

    return optimized;
}

// Test cases
console.log(optimizeBookings([[9, 12], [11, 13], [14, 17], [16, 18]])); // Output: [[9, 13], [14, 18]]
console.log(optimizeBookings([[1, 5], [6, 10], [10, 15]])); // Output: [[1, 15]]
console.log(optimizeBookings([[1, 3], [4, 6], [7, 9]])); // Output: [[1, 3], [4, 6], [7, 9]]
console.log(optimizeBookings([])); // Output: []
console.log(optimizeBookings([[1, 2], [2, 3], [3, 4]])); // Output: [[1, 4]]
