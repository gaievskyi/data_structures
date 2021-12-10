class Node<T> {
    constructor(public value: T, public next: Node<T> | null = null) {}

    toString() {
        return `${this.value}`
    }
}

export default class LinkedList<T extends {}> {
    private _head: Node<T> | null
    private _tail: Node<T> | null

    constructor(...values: T[]) {
        this._head = null
        this._tail = null

        if (values.length) {
            values.forEach((value) => this.append(value))
        }
    }

    get head(): Node<T> | null {
        return this._head
    }

    get tail(): Node<T> | null {
        return this._tail
    }

    *iterate(): IterableIterator<T> {
        let currentNode = this._head

        while (currentNode) {
            yield currentNode.value
            currentNode = currentNode.next
        }
    }

    [Symbol.iterator]() {
        return this.iterate()
    }

    // O(1)
    shift() {
        const firstNode = this._head
        if (!firstNode) return null

        this._head = firstNode.next
        firstNode.next = null

        return firstNode.value
    }

    // O(1)
    append(value: T) {
        const newNode = new Node(value)

        if (!this._head || !this._tail) {
            this._head = newNode
            this._tail = newNode

            return this
        }

        this._tail.next = newNode
        this._tail = newNode

        return this
    }

    // O(1)
    prepend(value: T) {
        const newNode = new Node(value, this.head)
        this._head = newNode

        if (!this.tail) {
            this._tail = newNode
        }

        return this
    }

    // O(n)
    find(value: T): Node<T> | null {
        let currentNode = this._head

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }

            currentNode = currentNode.next
        }
        return null
    }

    // O(n)
    insertAfter(value: T, newValue: T) {
        const node = this.find(value)

        if (!node) return this

        const newNode = new Node(newValue)
        newNode.next = node.next
        node.next = newNode

        return this
    }

    // O(n)
    remove(value: T): T | null {
        if (!this._head) return null

        if (this._head.value === value) {
            this._head = this._head.next
            return value
        }

        let currentNode = this._head
        let previousNode = currentNode

        while (currentNode) {
            if (currentNode.value === value) {
                previousNode.next = currentNode.next
                return value
            }

            previousNode = currentNode
            currentNode = currentNode.next as Node<T>
        }

        return null
    }

    // O(n)
    toArray() {
        return [...this]
    }

    // O(n)
    toString() {
        return this.toArray()
            .map((node) => node.toString())
            .join(' -> ')
    }
}
