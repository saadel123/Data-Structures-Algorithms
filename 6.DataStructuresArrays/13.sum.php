<?php
class Solution
{
    /**
     *
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]|string
     */
    public $nums = [];
    public $target;
    public function twoSum($nums, $target)
    {
        // Überprüfung: Ist das Array leer?
        if (count($nums) === 0) {
            return 'Bitte geben Sie ein vollständiges Array ein.';
        }

        // Überprüfung: Ist das Ziel kleiner oder gleich 0?
        if ($target <= 0) {
            return 'Bitte geben Sie eine Zahl größer als 0 ein.';
        }

        // Schleife durch das Array, um benachbarte Zahlen zu überprüfen
        for ($i = 0; $i < count($nums) - 1; $i++) {
            if ($nums[$i] + $nums[$i + 1] == $target) {
                return [$i, $i + 1];
            }
        }

        return 'Keine passende Summe gefunden.';
    }
}

$nums = [2, 7, 11, 15];
$target = 9;

$solution = new Solution();
$result = $solution->twoSum($nums, $target);

print_r($result);
?>