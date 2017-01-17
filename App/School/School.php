<?php namespace App\School;

use App\ValueObjects\Address;

class School {

    /**
     * @var string
     */
    private $schoolName;

    /**
     * @var Address
     */
    private $address;

    /**
     * @param string $schoolName
     * @param Address $address
     */
    public function __construct(string $schoolName, Address $address)
    {
        $this->schoolName = $schoolName;
        $this->address = $address;
    }

}