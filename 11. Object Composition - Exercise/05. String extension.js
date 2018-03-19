(function strExtend() {
    String.prototype.ensureStart = function (str) {
        let currStr = this.toString();
        if (!currStr.startsWith(str)) {
            currStr = str + currStr;
        }

        return currStr;
    };

    String.prototype.ensureEnd = function (str) {
        let currStr = this.toString();
        if (!currStr.endsWith(str)) {
            currStr += str;
        }

        return currStr;
    };

    String.prototype.isEmpty = function () {
        return this.toString().length === 0;
    };

    String.prototype.truncate = function (n) {
        let currStr = this.toString();
        n = Number(n);

        if (currStr.length < 4) {
            currStr = '.'.repeat(n);
        }

        if (currStr.length > n) {
            let lastIndex = currStr.substr(0, n - 2).lastIndexOf(' ');
            if (lastIndex !== -1) {
                return currStr.substr(0, lastIndex) + '...';
            } else {
                return currStr.substr(0, n - 3) + '...';
            }
        }

        return currStr;
    };

    String.format = function (string, ...args) {
        for (let i = 0; i < args.length; i++) {
            let index = string.indexOf('{' + i + '}');
            while (index !== -1) {
                string = string.replace(('{' + i + '}'), args[i]);
                index = string.indexOf(('{' + i + '}'));
            }
        }
        return string;
    }
})();