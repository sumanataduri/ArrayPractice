var main = function() {
    "use strict";
    var i, j = 0;

    $(".average button").on("click", function() {
        var input = $(".average input").val();
        input = input.split(" ");
        if (input !== "") {
            if (validate(input)) {
                $(".avg").text(exercise1(input));
            } else {
                $(".avg").text("Invalid Value. Use space as separator");
            }
        } else {
            $(".avg").text("Enter input");
        }
    });
    $(".highest button:nth-child(3)").on("click", function() {
        var input = $(".highest input").val();
        input = input.split(" ");
        if (input !== "") {
            if (validate(input)) {
                $(".max").text(exercise2(input));
            } else {
                $(".max").text("Invalid Value. Use space as separator");
            }
        } else {
            $(".max").text("Enter Input");
        }
    });
    $(".highest button:nth-child(4)").on("click", function() {
        var input = $(".highest input").val();
        input = input.split(" ");
        if (input !== "") {
            if (validate(input)) {
                $(".max").text(exercise2_(input));
            } else {
                $(".max").text("Invalid Value. Use space as separator");
            }
        } else {
            $(".max").text("Enter Input");
        }
    });
    $(".oneeven button:nth-child(3)").on("click", function() {
        var input = $(".oneeven input").val();
        input = input.split(" ");
        if (input !== "") {
            if (validate(input)) {
                $(".one").text(exercise3(input));
            } else {
                $(".one").text("Invalid Value. Use space as separator");
            }
        } else {
            $(".one").text("Enter Input");
        }
    });
    $(".oneeven button:nth-child(4)").on("click", function() {
        var input = $(".oneeven input").val();
        input = input.split(" ");
        if (input !== "") {
            if (validate(input)) {
                $(".one").text(exercise3_(input));
            } else {
                $(".one").text("Invalid Value. Use space as separator");
            }
        } else {
            $(".one").text("Enter Input");
        }
    });
    $(".alleven button:nth-child(3)").on("click", function() {
        var input = $(".alleven input").val();
        input = input.split(" ");
        if (input !== "") {
            if (validate(input)) {

                $(".even").text(exercise4(input));
            } else {
                $(".even").text("Invalid Value. Use space as separator");
            }
        } else {
            $(".even").text("Enter Input");
        }
    });
    $(".alleven button:nth-child(4)").on("click", function() {
        var input = $(".alleven input").val();
        input = input.split(" ");
        if (input !== "") {
            if (validate(input)) {
                $(".even").text(exercise4_(input));
            } else {
                $(".even").text("Invalid Value. Use space as separator");
            }
        } else {
            $(".even").text("Enter Input");
        }
    });
    $(".isstring button").on("click", function() {
        var arrayinput = $("div.isstring input:nth-child(2)").val();
        var inputstring = $("div.isstring input:nth-child(3)").val();
        arrayinput = arrayinput.split(" ");
        if (arrayinput !== "" && inputstring !== "") {
            $(".inarray").text(arrayContains(arrayinput, inputstring));
        } else
            $(".inarray").text("Enter input");

    });
    $(".twice button").on("click", function() {
        var arrayinput = $("div.twice input:nth-child(2)").val();
        var inputstring = $("div.twice input:nth-child(3)").val();
        arrayinput = arrayinput.split(" ");
        if (arrayinput !== "" && inputstring !== "") {
            $(".istwice").text(arrayContainsTwo(arrayinput, inputstring));
        } else
            $(".istwice").text("Enter input");

    });
    $(".thrice button").on("click", function() {
        var arrayinput = $("div.thrice input:nth-child(2)").val();
        var inputstring = $("div.thrice input:nth-child(3)").val();
        arrayinput = arrayinput.split(" ");
        if (arrayinput !== "" && inputstring !== "") {
            $(".isthrice").text(arrayContainsThree(arrayinput, inputstring));
        } else
            $(".isthrice").text("Enter input");
    });
    $(".ntimes button").on("click", function() {
        var arrayinput = $("div.ntimes input:nth-child(2)").val();
        var inputstring = $("div.ntimes input:nth-child(3)").val();
        var val = $("div.ntimes input:nth-child(4)").val();
        arrayinput = arrayinput.split(" ");
        if (arrayinput !== "" && inputstring !== "" && val !== "") {
            $(".isntimes").text(arrayContainsNTimes(arrayinput, inputstring, val));
        } else
            $(".isntimes").text("Enter input");
    });

    function validate(input) {
        for (i = 0; i < input.length; i++) {
            if (isNaN(input[i]) === true) {
                return false;
            }
        }
        return true;
    }

    function exercise1(nums) {
        var sumSoFar = 0;
        for (i = 0; i < nums.length; i++) {
            sumSoFar = parseInt(sumSoFar) + parseInt(nums[i]);
        }
        sumSoFar = sumSoFar / nums.length;
        return sumSoFar;
    }

    function exercise2(nums) {
        var max = 0;
        var max1 = 0;
        for (i = 0; i < nums.length; i++) {
            max1 = parseInt(nums[i]);
            if (max < max1) {
                max = max1;
            }
        }
        return max;
    }

    function exercise2_(nums) {
        var _max = _.max(nums, function(num) {
            return parseInt(num);
        });
        return _max;
    }

    function exercise3(nums) {

        for (i = 0; i < nums.length; i++) {
            if (nums[i] % 2 === 0) {
                return "True";
            }
        }
        return "False";
    }

    function exercise3_(nums) {
        var _even = _.find(nums, function(num) {
            return parseInt(num) % 2 === 0;
        });
        if (_even) {
            return "True";
        } else
            return "False";
    }

    function exercise4(nums) {
        for (i = 0; i < nums.length; i++) {
            if (nums[i] % 2 === 0) {
                j += 1;
                if (j === parseInt(nums.length)) {
                    return "True";
                }
            }
        }
        return "False";
    }

    function exercise4_(nums) {
        var evens = _.filter(nums, function(num) {
            return parseInt(num) % 2 === 0;
        });

        if (evens.length === nums.length) {
            return "True";
        }
        return "False";
    }

    function arrayContains(num, value) {
        for (i = 0; i < num.length; i++) {
            if (num[i] === value) {
                return true;
            }
        }
        return false;
    }

    function arrayContainsTwo(num, value) {

        for (i = 0; i < num.length; i++) {
            if (num[i] === value) {
                //alert(num[i]);
                j += 1;
                if (j === 2) {
                    return "True";
                }
            }
        }
        return false;
    }

    function arrayContainsThree(num, value) {

        for (i = 0; i < num.length; i++) {
            if (num[i] === value) {
                j += 1;
                if (j === 3) {
                    return "True";
                }
            }
        }
        return false;
    }

    function arrayContainsNTimes(num, value, val) {
        for (i = 0; i < num.length; i++) {
            if (num[i] === value) {
                j += 1;
                if (j === parseInt(val)) {
                    return "True";
                }
            }
        }
        return false;
    }
};
$(document).ready(main);