<?php namespace App\Purchase\Repository;

use App\Purchase\Purchase;

interface PurchaseRepositoryInterface {

    public function save(Purchase $purchase);

}