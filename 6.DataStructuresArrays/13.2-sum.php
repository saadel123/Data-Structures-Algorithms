<?php
class Solution
{
    /**
     * Finds two numbers in the array that add up to the target.
     *
     * @param Integer[] $nums Input array of integers.
     * @param Integer $target Target sum.
     * @return Integer[]|null Indices of the two numbers, or null if no solution.
     */
    public function twoSum($nums, $target)
    {
        $hashTable = [];

        foreach ($nums as $index => $num) {
            $complement = $target - $num;

            if (isset($hashTable[$complement])) {
                return [$hashTable[$complement], $index];
            }

            $hashTable[$num] = $index;
        }

        return null;
    }
}

// Test case
$nums = [2, 7, 11, 15];
$target = 9;

$solution = new Solution();
$result = $solution->twoSum($nums, $target);

print_r($result);
?>
