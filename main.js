const menu = {
    _courses: {
      appetizers: [ ],
      mains: [ ],
      desserts: [ ],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizersIn) {
      this._courses.appetizers = appetizersIn;
    },
    set mains(mainsIn) {
      this._courses.mains = mainsIn;
    },
    set desserts(dessertsIn) {
      this._courses.desserts = dessertsIn;
    },
    get courses() {
      return {
        appetizers: this.appetizersIn,
        mains: this.mainsIn,
        desserts: this.dessertsIn,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizers = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizers.price + mains.price + desserts.price;
      return `Your meal is ${appetizers.name}, ${mains.name}, and ${desserts.name} with the total price of ${totalPrice}.`;
    },
  };
  
  // Adding appetizers to the menu
  menu.addDishToCourse('appetizers', 'side salad', 3.00);
  menu.addDishToCourse('appetizers', 'fries', 3.75);
  menu.addDishToCourse('appetizers', 'nachos', 3.75);
  menu.addDishToCourse('appetizers', 'wings', 4.25);
  
  // Adding mains to the menu
  menu.addDishToCourse('mains', 'burger', 7.50);
  menu.addDishToCourse('mains', 'chicken sandwich', 7.50);
  menu.addDishToCourse('mains', 'chicken tenders', 8.00);
  menu.addDishToCourse('mains', 'salad', 7.00);
  menu.addDishToCourse('mains', 'steak', 10.00);
  
  // Adding desserts to the menu
  menu.addDishToCourse('desserts', 'ice cream', 4.00);
  menu.addDishToCourse('desserts', 'cobbler', 4.50);
  menu.addDishToCourse('desserts', 'cake', 4.00);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  