class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((first, second) => {
      if(first > second) {
        return 1;
      } else if(first < second) {
        return -1;
      } else {
        return 0;
      }
    });
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items.indexOf(pos) === -1) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let add = 0;
    this.items.forEach((number) => {
      add += number;
    });
    return add;
  }

  avg() {
    let div = 0;
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.forEach((numb) => {
        div += numb;
      });
    }
    return div / this.items.length;
  }
}

module.exports = SortedList;