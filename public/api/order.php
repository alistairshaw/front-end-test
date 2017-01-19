<?php

use App\Customer\Customer;
use App\Purchase\Purchase;
use App\Purchase\Repository\CSVPurchaseRepository;
use App\School\School;
use App\ValueObjects\Address;

require __DIR__ . '/../../vendor/autoload.php';

$purchase = new Purchase(
    new Customer($_POST['fullName'], $_POST['jobRole'], $_POST['emailAddress']),
    new School(
        $_POST['schoolName'],
        new Address($_POST['houseNumber'], $_POST['street'], $_POST['county'], $_POST['postcode'])
    ),
    $_POST['purchaseOrderNumber']
);

$purchaseRepository = new CSVPurchaseRepository();
$purchaseRepository->save($purchase);

echo json_encode([
    'success' => true
]);
