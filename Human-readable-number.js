export function toReadable(number) {
        var arr = number.toString().split("");
        var objSample = {
            0: "",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen"
        };
        var objDecades = {
            0: "",
            2: "twenty",
            3: "thirty",
            4: "forty",
            5: "fifty",
            6: "sixty",
            7: "seventy",
            8: "eighty",
            9: "ninety"
        };
        if (arr.length <= 2) {
            if (number == 0) {
                return "zero";
            }
            if (number < 20) {
                return objSample[number];
            } else {
              return [objDecades[arr[0]], objSample[arr[1]]].filter(function(x) {if (x != undefined || x != null) return x;
              }).join(" ");
            }
        } else if (arr.length == 3) {
          if (arr[1] == 1) {
            return [objSample[arr[0]], "hundred", objSample[arr[1] + arr[2]]].filter(function(x) {
              if (x != undefined || x != null) return x;
            }).join(" ");
          } 
          else {
          return [objSample[arr[0]], "hundred", objDecades[arr[1]], objSample[arr[2]]].filter(function(x) {
              if (x != undefined || x != null) return x;
          }).join(" ");
        }
      }
    };
