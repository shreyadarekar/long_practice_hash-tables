class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    this.data = new Array(numBuckets).fill(null);
    this.capacity = numBuckets;
    this.count = 0;
    // Your code here
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    // Your code here
    const index = this.hashMod(key);
    let currNode = this.data[index];
    while (currNode && currNode.key !== key) {
      currNode = currNode.next;
    }
    if (currNode) {
      currNode.value = value;
    } else {
      const newNode = new KeyValuePair(key, value);
      if (!this.data[index]) {
        this.data[index] = newNode;
      } else {
        newNode.next = this.data[index];
        this.data[index] = newNode;
      }
      this.count++;
    }
  }

  read(key) {
    // Your code here
    const index = this.hashMod(key);
    let currNode = this.data[index];
    while (currNode) {
      if (currNode.key === key) {
        return currNode.value;
      }
      currNode = currNode.next;
    }
  }

  resize() {
    // Your code here
    const dataCopy = this.data.slice();
    this.capacity = this.capacity * 2;
    this.count = 0;
    this.data = new Array(this.capacity).fill(null);
    dataCopy.forEach((KeyValuePair) => {
      let curr = KeyValuePair;
      while (curr) {
        this.insert(curr.key, curr.value);
        curr = curr.next;
      }
    });
  }

  delete(key) {
    // Your code here
    const index = this.hashMod(key);
    let currNode = this.data[index];
    while (currNode) {
      if (currNode.key === key) {
        currNode.key = undefined;
        currNode.value = undefined;
        this.count--;
      }
      currNode = currNode.next;
    }
    return "Key not found";
  }
}

module.exports = HashTable;
