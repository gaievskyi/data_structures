// @ts-nocheck

import LinkedList from '../LinkedList'

describe('LinkedList methods', () => {
    test('should create Linked List instance', () => {
        expect(new LinkedList('A', 'B', 'C').toString()).toBe('A -> B -> C')
    })
    test('should append a node to the linked list', () => {
        const linkedList = new LinkedList('A', 'B', 'C')
        expect(linkedList.append('X').toString()).toBe('A -> B -> C -> X')
        expect(linkedList.head.value).toBe('A')
        expect(linkedList.tail.value).toBe('X')
    })
    test('should prepend a node to the linked list', () => {
        const linkedList = new LinkedList('A', 'B', 'C')
        expect(linkedList.prepend('X').toString()).toBe('X -> A -> B -> C')
        expect(linkedList.head.value).toBe('X')
        expect(linkedList.tail.value).toBe('C')
    })
    test('should find a node in the linked list and return it, otherwise return null', () => {
        const linkedList = new LinkedList('A', 'B', 'C')
        expect(linkedList.find('B').toString()).toBe('B')
        expect(linkedList.find('not existed value')).toBe(null)
    })
    test('should remove a node in the linked list and return it', () => {
        const linkedList = new LinkedList('A', 'B', 'C')
        expect(linkedList.remove('B').toString()).toBe('B')
        expect(linkedList.remove('not existed value')).toBe(null)
        expect(linkedList.toString()).toBe('A -> C')
    })
    test('should insert a new node after a specified node in the linked list', () => {
        const linkedList = new LinkedList('A', 'B', 'C')
        expect(linkedList.insertAfter('B', 'X').toString()).toBe('A -> B -> X -> C')
    })
    test('should remove a head of the linked list and return the removed value', () => {
        const linkedList = new LinkedList('A', 'B', 'C', 'D', 'E')
        expect(linkedList.shift().toString()).toBe('A')
        expect(linkedList.toString()).toBe('B -> C -> D -> E')
    })
})
