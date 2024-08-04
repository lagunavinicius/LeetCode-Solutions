class Solution(object):

    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        
        dict = {
            ')': '(',
            '}': '{',
            ']': '['
        }
        
        for letter in s:
            if letter in dict:
                top_element = stack.pop() if stack else '#'
                
                if dict[letter] != top_element:
                    return False
            else:
                stack.append(letter)

        return not stack
