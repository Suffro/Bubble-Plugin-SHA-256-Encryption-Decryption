function(properties, context) {
    const { createHmac } = require('crypto');

    const data = properties.string;
    const algo = properties.algorithm;
    const digest = properties.digest;
    const secret = properties.secret?properties.secret:context.keys.SecretKey;
    
    if (!data || !algo || !digest || !secret) return;
    
    // Encrypt
	const ciphertext = createHmac(algo, secret).update(data).digest(digest);

    // Return result
    return(
    	{
     		encrypted_string: ciphertext
		}
    );
}