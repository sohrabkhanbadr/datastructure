def insertion_sort(array):
    for i in range(1, len(array)):
        current_element = array[i]
        j = i - 1
        while j >= 0 and array[j] > current_element:
            array[j + 1] = array[j]
            j -= 1
        array[j + 1] = current_element
    return array



print(insertion_sort([7,3,6,1]))