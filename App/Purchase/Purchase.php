<?php namespace App\Purchase;

use App\Customer\Customer;
use App\School\School;

class Purchase {

    /**
     * @var Customer
     */
    private $customer;

    /**
     * @var School
     */
    private $school;

    /**
     * @var string
     */
    private $purchaseOrderNumber;

    /**
     * Purchase constructor.
     * @param Customer $customer
     * @param School $school
     * @param string $purchaseOrderNumber
     */
    public function __construct(Customer $customer, School $school, string $purchaseOrderNumber)
    {
        $this->customer = $customer;
        $this->school = $school;
        $this->purchaseOrderNumber = $purchaseOrderNumber;
    }

}