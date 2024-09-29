# Meeting Scheduler

## Objective:  
Develop a function that helps a workspace management app schedule meetings by merging overlapping or consecutive booking times. The function will ensure that the meeting room bookings are optimized without overlaps.

## Task:  
Write a function optimizeBookings(bookings: number[][]): number[][] that takes an array of meeting times (as start and end times) and returns an optimized list of meeting bookings.
If any two meeting times overlap or are consecutive, they should be merged into a single booking period.
The function should output the optimized booking times sorted by their starting points.

Example: Input: [[9, 12], [11, 13], [14, 17], [16, 18]] Output: [[9, 13], [14, 18]]   
Explanation:  
The meetings from 9 to 12 and 11 to 13 overlap and are merged into a single booking from 9 to 13.  
The meetings from 14 to 17 and 16 to 18 overlap and are merged into a single booking from 14 to 18.  
