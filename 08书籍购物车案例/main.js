const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: 'Java web 入门',
        date: '2000-9',
        price: 55.00,
        count: 1
      },
      {
        id: 2,
        name: 'Python 入门',
        date: '2000-7',
        price: 98.00,
        count: 1
      },
      {
        id: 3,
        name: 'Java web 精通',
        date: '2006-9',
        price: 55.00,
        count: 1
      },
      {
        id: 4,
        name: '数据分析 入门',
        date: '2004-3',
        price: 155.00,
        count: 1
      },
      {
        id: 5,
        name: '算法 入门',
        date: '2010-9',
        price: 95.00,
        count: 1
      }
    ]
  },
  methods: {
    getPrice(price) {
      return '￥'+price.toFixed(2)
    },
    increment(index) {
      this.books[index].count++;

    },
    decrement(index) {

      this.books[index].count--;

    },
    removeHandle(index) {
      this.books.splice(index,1)
    }

  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      for (let i = 0; i < this.books.length; i++) {
        totalPrice+=this.books[i].price*this.books[i].count
      }
      return totalPrice
    }
  },
  filters: {
    showPrice(price) {
      return '￥'+price.toFixed(2)
    }
  }

})
