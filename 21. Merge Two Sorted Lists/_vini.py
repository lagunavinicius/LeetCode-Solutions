list1, list2 = [1,2,4], [1,3,4]

def mergeLists(list1, list2):
    return sorted(list1 + list2)

print(mergeLists(list1, list2))
