// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var rooms = [
  {
    "name": "經濟雙人房",
    "eng": "Economy Double Room",
    "price": 7000,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(1).jpg",
    "discount": 0.9,
    "equipment": {
      "wifi": false,
      "bathtub": true,
      "breakfast": true
    }
  },
  {
    "name": "海景三人房",
    "eng": "Sea view triple Room",
    "price": 7800,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(2).jpg",
    "discount": 0.8,
    "equipment": {
      "wifi": true,
      "bathtub": true,
      "breakfast": false
    }
  },
  {
    "name": "典雅景觀房",
    "eng": "Elegant landscape Room",
    "price": 5400,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(3).jpg",
    "discount": 0.85,
    "equipment": {
      "wifi": false,
      "bathtub": true,
      "breakfast": true
    }
  },
  {
    "name": "尊享豪華房",
    "eng": "Exclusive Deluxe Room",
    "price": 9800,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(4).jpg",
    "discount": 0.8,
    "equipment": {
      "wifi": true,
      "bathtub": false,
      "breakfast": true
    }
  },
  {
    "name": "商務雙人房",
    "eng": "Business Double Room",
    "price": 5600,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room (5).jpg",
    "discount": 0.9,
    "equipment": {
      "wifi": true,
      "bathtub": false,
      "breakfast": false
    }
  },
  {
    "name": "溫泉雙人房",
    "eng": "Hot spring double Room",
    "price": 8400,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room (6).jpg",
    "discount": 0.6,
    "equipment": {
      "wifi": true,
      "bathtub": true,
      "breakfast": true
    }
  },
  {
    "name": "總統套房",
    "eng": "Presidential Suite",
    "price": 23000,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room (7).jpg",
    "discount": 0.75,
    "equipment": {
      "wifi": true,
      "bathtub": true,
      "breakfast": true
    }
  },
  {
    "name": "奢華四人房",
    "eng": "Luxury four Room",
    "price": 8500,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room (8).jpg",
    "discount": 0.7,
    "equipment": {
      "wifi": true,
      "bathtub": true,
      "breakfast": false
    }
  }
];

Vue.component("room",{
  template: "#room", 
  props: ["room_data", "hotel_discount", "hotel_fee", "delete_room"],
  computed: {
    final_discount() {
      //計算總折扣數（小數點兩位）x100
      return this.room_data.discount * this.hotel_discount
    },
    final_price (){
      return parseInt(this.room_data.price * this.final_discount) + 1.0 * this.hotel_fee
    },
    final_discount_show (){
      return parseInt(this.room_data.discount * this.hotel_discount*100)      
    },
    bg_css (){
      return{
        "background-image": "url('"+this.room_data.cover+"')",
      }
    }
  }
})

var vm = new Vue({
  el: "#app",
  data: {
    rooms: rooms,
    discount: 0.9,
    service_fee: 200,
    selected_id: 0
  },methods: {
    add_room (){
      this.rooms.push({
        "name": "New Room",
        "eng": "",
        "price": "",
        "amount": 0,
        "cover": "",
        "discount": "",
        "equipment": {
          "wifi": true,
          "bathtub": true,
          "breakfast": false
        }
      })
      this.selected_id = rooms.length -1
    },
    delete_room (id){
      this.rooms.splice(id,1)
    }
  }
})
