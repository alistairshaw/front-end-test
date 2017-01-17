<?php namespace App\Customer;

class Customer {

    /**
     * @var string
     */
    private $fullName;

    /**
     * @var string
     */
    private $jobRole;

    /**
     * @var string
     */
    private $emailAddress;

    /**
     * Customer constructor.
     * @param string $fullName
     * @param string $jobRole
     * @param string $emailAddress
     */
    public function __construct(string $fullName, string $jobRole, string $emailAddress)
    {
        $this->fullName = $fullName;
        $this->jobRole = $jobRole;
        $this->emailAddress = $emailAddress;
    }

}