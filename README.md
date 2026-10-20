# First_Missing_Positive

Given an unsorted integer array `nums`, return the smallest positive integer (`n > 0`) that is not present in `nums`.

## Approach
I sort the array, then I start with `smallNum = 1` and loop through it. If the current element equals `smallNum`, I increment `smallNum`. If the current element is greater than `smallNum`, then `smallNum` is missing, so I return it. Negative numbers, zeros and duplicates are simply skipped.

If the loop ends without finding a gap, I return `smallNum`.



