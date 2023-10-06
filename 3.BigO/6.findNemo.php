<?php
//run php server https://www.youtube.com/watch?v=zT6QrGIfXaU
declare(strict_types=1);

class Main
{
    public const FISH = ['dory', 'bruce', 'marlin', 'nemo'];
    public const NEMO = ['nemo'];
    public const EVERYONE = ['dory', 'bruce', 'marlin', 'nemo', 'grill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
    public array $large = [];

    public function __construct()
    {
        $this->large = array_fill(0, 10000, 'nemo');
    }

    public function findNemo(array $fishes)
    {
        $start = microtime(true);
        for ($i = 0; $i < count($fishes); $i++) {
            if ('nemo' === $fishes[$i]) { // Fixed variable name $fish to $fishes
                echo 'Found Nemo!';
            }
        }
        $end = microtime(true) - $start;

        echo sprintf('Call to find Nemo took %s milliseconds', number_format($end * 1000, 7)); // Fixed unit to milliseconds
    }
}

$main = new Main();
$main->findNemo(Main::EVERYONE);
