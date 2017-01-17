<?php namespace App\ValueObjects;

class Address {

    /**
     * @var string
     */
    private $houseNumber;

    /**
     * @var string
     */
    private $street;

    /**
     * @var string
     */
    private $county;

    /**
     * @var string
     */
    private $postcode;

    /**
     * Address constructor.
     * @param string $houseNumber
     * @param string $street
     * @param string $county
     * @param string $postcode
     */
    public function __construct(string $houseNumber, string $street, string $county, string $postcode)
    {
        $this->houseNumber = $houseNumber;
        $this->street = $street;
        $this->county = $county;
        $this->postcode = $postcode;
    }

}