<?php
// Memulai session untuk menyimpan data
session_start();

// Mengambil data dari form
$title = isset($_POST['title']) ? htmlspecialchars($_POST['title']) : '';
$year = isset($_POST['year']) ? htmlspecialchars($_POST['year']) : '';
$model = isset($_POST['model']) ? htmlspecialchars($_POST['model']) : '';
$condition = isset($_POST['condition']) ? htmlspecialchars($_POST['condition']) : '';
$total_amount = isset($_POST['total_amount']) ? htmlspecialchars($_POST['total_amount']) : '';
$account_number = isset($_POST['account_number']) ? htmlspecialchars($_POST['account_number']) : '';
$bank = isset($_POST['bank']) ? htmlspecialchars($_POST['bank']) : '';
$account_holder = isset($_POST['account_holder']) ? htmlspecialchars($_POST['account_holder']) : '';
$transaction = isset($_POST['transaction']) ? htmlspecialchars($_POST['transaction']) : '';
$send_mobile = isset($_POST['send_mobile']) ? true : false;
$send_email = isset($_POST['send_email']) ? true : false;
$mobile_phones = isset($_POST['mobile_phones']) ? htmlspecialchars($_POST['mobile_phones']) : '';
$emails = isset($_POST['emails']) ? htmlspecialchars($_POST['emails']) : '';

// Handle upload gambar
$image_path = '';
if (isset($_FILES['product_image']) && $_FILES['product_image']['error'] == 0) {
    $upload_dir = 'uploads/';
    if (!file_exists($upload_dir)) {
        mkdir($upload_dir, 0777, true);
    }
    
    $file_name = time() . '_' . basename($_FILES['product_image']['name']);
    $target_file = $upload_dir . $file_name;
    
    if (move_uploaded_file($_FILES['product_image']['tmp_name'], $target_file)) {
        $image_path = $target_file;
    }
}


?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Output Pemesanan Barang</title>
    <link rel="stylesheet" href="assets/css/output.css">
</head>
<body>
    <div class="navbar">
        <a href="index.html">Home</a>
        <a href="#">Register</a>
        <a href="#">Policy</a>
        <a href="#">About</a>
    </div>

    <div class="container">
        <div class="output-content">
            <div class="left-section">
                <?php if ($image_path): ?>
                    <div class="product-image">
                        <img src="<?php echo $image_path; ?>" alt="Product Image">
                    </div>
                <?php else: ?>
                    <div class="product-image placeholder">
                        <div class="placeholder-icon">PICTURE</div>
                    </div>
                <?php endif; ?>
            </div>

            <div class="right-section">
                <div class="info-group">
                    <div class="info-item">
                        <label>Title Here</label>
                        <div class="info-value"><?php echo $title; ?></div>
                    </div>

                    <div class="info-item">
                        <label>Description</label>
                        <div class="info-value">Year : <?php echo $year; ?></div>
                        <div class="info-value">Model : <?php echo $model; ?></div>
                        <div class="info-value">Condition : <?php echo $condition; ?></div>
                    </div>

                    <div class="info-item">
                        <label>Total Amount</label>
                        <div class="info-value"><?php echo $total_amount; ?></div>
                    </div>

                    <div class="info-item">
                        <label>Pay to</label>
                        <div class="info-value"><?php echo $account_number; ?></div>
                    </div>

                    <div class="info-item">
                        <label>Payment Type</label>
                        <div class="info-value dropdown"><?php echo $bank; ?></div>
                    </div>

                    <div class="info-item">
                        <label>Account Holder</label>
                        <div class="info-value"><?php echo $account_holder; ?></div>
                    </div>  

                    <div class="info-item">
                        <label>Account No</label>
                        <div class="info-value"><?php echo $account_number; ?></div>
                    </div>

                    <div class="checkbox-items">
                        <div class="checkbox-item">
                            <input type="checkbox" <?php echo $send_mobile ? 'checked' : ''; ?> disabled>
                            <span>Send to Mobile Phone</span>
                        </div>
                        <div class="checkbox-item">
                            <input type="checkbox" <?php echo $send_email ? 'checked' : ''; ?> disabled>
                            <span>Email me copy of transaction</span>
                        </div>
                    </div>

                    <div class="info-item">
                        <label>Send to Mobile Phone</label>
                        <div class="info-value"><?php echo $mobile_phones; ?></div>
                    </div>

                    <div class="info-item">
                        <label>Send to Email</label>
                        <div class="info-value"><?php echo $emails; ?></div>
                    </div>

                    <div class="button-container">
                        <button class="pay-button">Pay using QuickLink</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>