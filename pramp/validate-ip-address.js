// string to array : split('')

function validateIP(ip) {
	/**
	@param ip: string
	@return: boolean
	*/

  const ipArr = ip.split('.');
  return (ipArr.length === 4) && ipArr.every((str) => {
    if (str.length === 0 || !str.split('').every(e => '0' <= e && e <= '9')) return false;
    const num = Number(str);
    return 0 <= num && num <= 255;
  });
}

// Test Case #1
// Input: "192.168.0.1",Expected: true,Actual:  true
// Test Case #2
// Input: "0.0.0.0",Expected: true,Actual:  true
// Test Case #3
// Input: "123.24.59.99",Expected: true,Actual:  true
// Test Case #4
// Input: "192.168.123.456",Expected: false,Actual:  false
// Test Case #5
// Input: "1.2.3.4.5",Expected: false,Actual:  false
// Test Case #6
// Input: "1..23.4",Expected: false,Actual:  false
// Test Case #7
// Input: "123.256.34.56",Expected: false,Actual:  false
// Test Case #8
// Input: ".254.255.0",Expected: false,Actual:  false
// Test Case #9
// Input: "1.2.3.0x1",Expected: false,Actual:  false
