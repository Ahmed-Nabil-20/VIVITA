(function () {
    "use strict";

    $(".yes").click (function(){
        $(this).parent().parent().find("input.res").val(1);
    });
    $(".no").click (function(){
        $(this).parent().parent().find("input.res").val(0);
    });


    function ctrls() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl__button--decrement"),
            counter: {
                container: document.querySelector(".ctrl__counter"),
                num: document.querySelector(".ctrl__counter-num"),
                input: document.querySelector(".ctrl__counter-input")
            },
            increment: document.querySelector(".ctrl__button--increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_2() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".decrement_ctrl_2"),
            counter: {
                container: document.querySelector(".counter_ctrl_2"),
                num: document.querySelector(".num_ctrl_2"),
                input: document.querySelector(".input_ctrl_2")
            },
            increment: document.querySelector(".increment_ctrl_2")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_3() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_3_decrement"),
            counter: {
                container: document.querySelector(".ctrl_3_counter"),
                num: document.querySelector(".ctrl_3_num"),
                input: document.querySelector(".ctrl_3_input")
            },
            increment: document.querySelector(".ctrl_3_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_4() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_4_decrement"),
            counter: {
                container: document.querySelector(".ctrl_4_counter"),
                num: document.querySelector(".ctrl_4_num"),
                input: document.querySelector(".ctrl_4_input")
            },
            increment: document.querySelector(".ctrl_4_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_5() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_5_decrement"),
            counter: {
                container: document.querySelector(".ctrl_5_counter"),
                num: document.querySelector(".ctrl_5_num"),
                input: document.querySelector(".ctrl_5_input")
            },
            increment: document.querySelector(".ctrl_5_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_6() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_6_decrement"),
            counter: {
                container: document.querySelector(".ctrl_6_counter"),
                num: document.querySelector(".ctrl_6_num"),
                input: document.querySelector(".ctrl_6_input")
            },
            increment: document.querySelector(".ctrl_6_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_7() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_7_decrement"),
            counter: {
                container: document.querySelector(".ctrl_7_counter"),
                num: document.querySelector(".ctrl_7_num"),
                input: document.querySelector(".ctrl_7_input")
            },
            increment: document.querySelector(".ctrl_7_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_8() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_8_decrement"),
            counter: {
                container: document.querySelector(".ctrl_8_counter"),
                num: document.querySelector(".ctrl_8_num"),
                input: document.querySelector(".ctrl_8_input")
            },
            increment: document.querySelector(".ctrl_8_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_9() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_9_decrement"),
            counter: {
                container: document.querySelector(".ctrl_9_counter"),
                num: document.querySelector(".ctrl_9_num"),
                input: document.querySelector(".ctrl_9_input")
            },
            increment: document.querySelector(".ctrl_9_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_10() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_10_decrement"),
            counter: {
                container: document.querySelector(".ctrl_10_counter"),
                num: document.querySelector(".ctrl_10_num"),
                input: document.querySelector(".ctrl_10_input")
            },
            increment: document.querySelector(".ctrl_10_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_11() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_11_decrement"),
            counter: {
                container: document.querySelector(".ctrl_11_counter"),
                num: document.querySelector(".ctrl_11_num"),
                input: document.querySelector(".ctrl_11_input")
            },
            increment: document.querySelector(".ctrl_11_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_12() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_12_decrement"),
            counter: {
                container: document.querySelector(".ctrl_12_counter"),
                num: document.querySelector(".ctrl_12_num"),
                input: document.querySelector(".ctrl_12_input")
            },
            increment: document.querySelector(".ctrl_12_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_13() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_13_decrement"),
            counter: {
                container: document.querySelector(".ctrl_13_counter"),
                num: document.querySelector(".ctrl_13_num"),
                input: document.querySelector(".ctrl_13_input")
            },
            increment: document.querySelector(".ctrl_13_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_14() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_14_decrement"),
            counter: {
                container: document.querySelector(".ctrl_14_counter"),
                num: document.querySelector(".ctrl_14_num"),
                input: document.querySelector(".ctrl_14_input")
            },
            increment: document.querySelector(".ctrl_14_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_15() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_15_decrement"),
            counter: {
                container: document.querySelector(".ctrl_15_counter"),
                num: document.querySelector(".ctrl_15_num"),
                input: document.querySelector(".ctrl_15_input")
            },
            increment: document.querySelector(".ctrl_15_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_16() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_16_decrement"),
            counter: {
                container: document.querySelector(".ctrl_16_counter"),
                num: document.querySelector(".ctrl_16_num"),
                input: document.querySelector(".ctrl_16_input")
            },
            increment: document.querySelector(".ctrl_16_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }
    function ctrls_17() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector(".ctrl_17_decrement"),
            counter: {
                container: document.querySelector(".ctrl_17_counter"),
                num: document.querySelector(".ctrl_17_num"),
                input: document.querySelector(".ctrl_17_input")
            },
            increment: document.querySelector(".ctrl_17_increment")
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = _this.counter > 0 ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = counter < 10 ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render("is-decrement-hide", "is-decrement-visible");
                });
            });

            _this.els.increment.addEventListener("click", function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render("is-increment-hide", "is-increment-visible");
                });
            });

            _this.els.counter.input.addEventListener("input", function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener("focus", function (e) {
                _this.els.counter.container.classList.add("is-input");
            });

            _this.els.counter.input.addEventListener("blur", function (e) {
                _this.els.counter.container.classList.remove("is-input");
                _this.render();
            });
        };
    }

    // init
    var controls = new ctrls();
    var controls_2 = new ctrls_2();
    var controls_3 = new ctrls_3();
    var controls_4 = new ctrls_4();
    var controls_5 = new ctrls_5();
    var controls_6 = new ctrls_6();
    var controls_7 = new ctrls_7();
    var controls_8 = new ctrls_8();
    var controls_9 = new ctrls_9();
    var controls_10 = new ctrls_10();
    var controls_11 = new ctrls_11();
    var controls_12 = new ctrls_12();
    var controls_13 = new ctrls_13();
    var controls_14 = new ctrls_14();
    var controls_15 = new ctrls_15();
    var controls_16 = new ctrls_16();
    var controls_17 = new ctrls_17();

    document.addEventListener("DOMContentLoaded", controls.ready);
    document.addEventListener("DOMContentLoaded", controls_2.ready);
    document.addEventListener("DOMContentLoaded", controls_3.ready);
    document.addEventListener("DOMContentLoaded", controls_4.ready);
    document.addEventListener("DOMContentLoaded", controls_5.ready);
    document.addEventListener("DOMContentLoaded", controls_6.ready);
    document.addEventListener("DOMContentLoaded", controls_7.ready);
    document.addEventListener("DOMContentLoaded", controls_8.ready);
    document.addEventListener("DOMContentLoaded", controls_9.ready);
    document.addEventListener("DOMContentLoaded", controls_10.ready);
    document.addEventListener("DOMContentLoaded", controls_11.ready);
    document.addEventListener("DOMContentLoaded", controls_12.ready);
    document.addEventListener("DOMContentLoaded", controls_13.ready);
    document.addEventListener("DOMContentLoaded", controls_14.ready);
    document.addEventListener("DOMContentLoaded", controls_15.ready);
    document.addEventListener("DOMContentLoaded", controls_16.ready);
    document.addEventListener("DOMContentLoaded", controls_17.ready);


})();