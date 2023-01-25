function(properties, context) {
    const { createHash } = require('crypto');

    const data = properties.string;
    const algo = properties.algorithm;
    const digest = properties.digest;
    
    if (!data || !algo || !digest) return;
    
    // Encrypt
	const ciphertext = createHash(algo).update(data).digest(digest);

    // Return result
    return(
    	{
     		encrypted_string: ciphertext
		}
    );
}