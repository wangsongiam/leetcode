/*
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer
 *
 * algorithms
 * Easy (24.34%)
 * Total Accepted:    271.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '0'
 *
 * Reverse digits of an integer.
 * 
 * 
 * Example1: x =  123, return  321
 * Example2: x = -123, return -321
 * 
 * 
 * click to show spoilers.
 * 
 * Have you thought about this?
 * 
 * Here are some good questions to ask before coding. Bonus points for you if
 * you have already thought through this!
 * 
 * If the integer's last digit is 0, what should the output be? ie, cases such
 * as 10, 100.
 * 
 * Did you notice that the reversed integer might overflow? Assume the input is
 * a 32-bit integer, then the reverse of 1000000003 overflows. How should you
 * handle such cases?
 * 
 * For the purpose of this problem, assume that your function returns 0 when
 * the reversed integer overflows.
 * 
 * 
 * 
 * 
 * 
 * Note:
 * The input is assumed to be a 32-bit signed integer. Your function should
 * return 0 when the reversed integer overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
const reverse = x =>  {
  let result =
    x > -1
      ? parseInt(x.toString().split('').reverse().join(''))
      : -parseInt(x.toString().split('').reverse().join(''))
  return Math.abs(result) < 2 ** 31 ? result : 0
}

