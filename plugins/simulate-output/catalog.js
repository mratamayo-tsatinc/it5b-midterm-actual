// Generated from exercises/*.java. Run import-exercises.cjs after editing them.
const SO_EXERCISES=Object.freeze([
  {
    "id": "TaskAlpha",
    "filename": "TaskAlpha.java",
    "raw": "/*\n@output\nLearning C Programming!\n@variables\n(this program does not declare any variables)\n*/\npublic class TaskAlpha {\n    public static void main(String[] args) {\n        System.out.print(\"Learning C Programming!\");\n    }\n}"
  },
  {
    "id": "TaskBravo",
    "filename": "TaskBravo.java",
    "raw": "/*\n@output\nLearn\nLearning C\nLearning C Pro\nLearning C Program\nLearning C Programming!\n\n@variables\n(this program does not declare any variables)\n*/\npublic class TaskBravo {\n    public static void main(String[] args) {\n        System.out.println(\"Learn\");\n        System.out.println(\"Learning C\");\n        System.out.println(\"Learning C Pro\");\n        System.out.println(\"Learning C Program\");\n        System.out.println(\"Learning C Programming!\");\n    }\n}"
  },
  {
    "id": "TaskCharlie",
    "filename": "TaskCharlie.java",
    "raw": "/*\n@output\n#####\n#####\n#####\n#####\n#####\n@variables\n(this program does not declare any variables)\n*/\npublic class TaskCharlie {\n    public static void main(String[] args) {\n        System.out.println(\"#####\");\n        System.out.println(\"#####\");\n        System.out.println(\"#####\");\n        System.out.println(\"#####\");\n        System.out.print(\"#####\");\n    }\n}"
  },
  {
    "id": "TaskDelta",
    "filename": "TaskDelta.java",
    "raw": "/*\n@output\n@\n\n@@\n\n@@@\n\n@@@@\n\n@@@@@\n@variables\n(this program does not declare any variables)\n*/\npublic class TaskDelta {\n    public static void main(String[] args) {\n        System.out.print(\"@\\n\\n\");\n        System.out.print(\"@@\\n\\n\");\n        System.out.print(\"@@@\\n\\n\");\n        System.out.print(\"@@@@\\n\\n\");\n        System.out.print(\"@@@@@\");\n    }\n}"
  },
  {
    "id": "TaskEcho",
    "filename": "TaskEcho.java",
    "raw": "/*\n@output\nNUMBER SEQUENCE:\n5\n4\n3\n2\n1\n\n@variables\n(this program does not declare any variables)\n*/\npublic class TaskEcho {\n    public static void main(String[] args) {\n        System.out.println(\"NUMBER SEQUENCE:\");\n        System.out.println(\"5\");\n        System.out.println(\"4\");\n        System.out.println(\"3\");\n        System.out.println(\"2\");\n        System.out.println(\"1\");\n    }\n}"
  },
  {
    "id": "TaskFoxtrot",
    "filename": "TaskFoxtrot.java",
    "raw": "/*\n@output\nNUMBER SEQUENCE:\n5 4 3 2 1\n\n@variables\n(this program does not declare any variables)\n*/\npublic class TaskFoxtrot {\n    public static void main(String[] args) {\n        System.out.println(\"NUMBER SEQUENCE:\");\n        System.out.print(\"5 \");\n        System.out.print(\"4 \");\n        System.out.print(\"3 \");\n        System.out.print(\"2 \");\n        System.out.println(\"1\");\n    }\n}"
  },
  {
    "id": "TaskGolf",
    "filename": "TaskGolf.java",
    "raw": "/*\n@output\n===NO OUTPUT===\n@variables\na = 10\nb = 5\nc = 3\nd = 1\n*/\npublic class TaskGolf {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 5;\n        int c = 3;\n        int d = 1;\n\n        System.out.print(\"===NO OUTPUT===\");\n    }\n}"
  },
  {
    "id": "TaskHotel",
    "filename": "TaskHotel.java",
    "raw": "/*\n@output\nLearning escape characters in C\nShe said, \"C programming is fun!\"\nIt's time to practice.\nFile path: C:\\Programs\\C\nLoading Done!      \n\n@variables\n(this program does not declare any variables)\n*/\npublic class TaskHotel {\n    public static void main(String[] args) {\n        System.out.println(\"Learning escape characters in C\");\n        System.out.println(\"She said, \\\"C programming is fun!\\\"\");\n        System.out.println(\"It's time to practice.\");\n        System.out.println(\"File path: C:\\\\Programs\\\\C\");\n        System.out.print(\"Loading......\\r\");\n        System.out.println(\"Loading Done!\");\n    }\n}"
  },
  {
    "id": "TaskIndia",
    "filename": "TaskIndia.java",
    "raw": "/*\n@output\nStored values:\n==========\na = 10\n==========\nb = 5\n==========\nc = 3\n==========\nd = 1\n==========\n\n@variables\na = 10\nb = 5\nc = 3\nd = 1\n*/\npublic class TaskIndia {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 5;\n        int c = 3;\n        int d = 1;\n\n        System.out.println(\"Stored values:\");\n        System.out.println(\"==========\");\n        System.out.println(\"a = \" + a);\n        System.out.println(\"==========\");\n        System.out.println(\"b = \" + b);\n        System.out.println(\"==========\");\n        System.out.println(\"c = \" + c);\n        System.out.println(\"==========\");\n        System.out.println(\"d = \" + d);\n        System.out.println(\"==========\");\n    }\n}"
  },
  {
    "id": "TaskJuliet",
    "filename": "TaskJuliet.java",
    "raw": "/*\n@output\nName: Maria\nAge: 20\nHeight: 165.5 cm\nGrade: A\nPi (2 decimals): 3.14\nPi (4 decimals): 3.1416\n\n@variables\nage = 20\nheight = 165.5\ngrade = A\nname = Maria\n*/\npublic class TaskJuliet {\n    public static void main(String[] args) {\n        int age = 20;\n        float height = 165.5f;\n        char grade = 'A';\n        String name = \"Maria\";\n\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Age: \" + age);\n        System.out.printf(\"Height: %.1f cm%\\n\", height);\n        System.out.println(\"Grade: \" + grade);\n        System.out.printf(\"Pi (2 decimals): %.2f%\\n\", 3.14159);\n        System.out.printf(\"Pi (4 decimals): %.4f%\\n\", 3.14159);\n    }\n}"
  },
  {
    "id": "TaskKilo",
    "filename": "TaskKilo.java",
    "raw": "/*\n@output\nInitial score: 75\nInitial price: 9.50\nInitial letter: B\nUpdated score: 90\nUpdated price: 12.00\nUpdated letter: A\nFinal score: 95\n\n@variables\nscore = 95\nprice = 12.00\nletter = A\nbonus = 90\n*/\npublic class TaskKilo {\n    public static void main(String[] args) {\n        int score;\n        float price;\n        char letter;\n\n        score = 75;\n        price = 9.5f;\n        letter = 'B';\n\n        System.out.println(\"Initial score: \" + score);\n        System.out.printf(\"Initial price: %.2f%\\n\", price);\n        System.out.println(\"Initial letter: \" + letter);\n\n        score = 90;\n        price = price + 2.5f;\n        letter = 'A';\n\n        System.out.println(\"Updated score: \" + score);\n        System.out.printf(\"Updated price: %.2f%\\n\", price);\n        System.out.println(\"Updated letter: \" + letter);\n\n        int bonus = score;\n        score = bonus + 5;\n\n        System.out.println(\"Final score: \" + score);\n    }\n}"
  },
  {
    "id": "TaskLima",
    "filename": "TaskLima.java",
    "raw": "/*\n@output\na = 15, b = 4\nSum: 19\nDifference: 11\nProduct: 60\nInteger Quotient: 3\nRemainder: 3\nFloat Quotient: 3.75\n\n@variables\nsum = 19\ndiff = 11\nproduct = 60\nquotient = 3\nremainder = 3\nfloatQuotient = 3.75\n*/\npublic class TaskLima {\n    public static void main(String[] args) {\n        int a = 15;\n        int b = 4;\n\n        int sum = a + b;\n        int diff = a - b;\n        int product = a * b;\n        int quotient = a / b;\n        int remainder = a % b;\n\n        float x = 15.0f;\n        float y = 4.0f;\n        float floatQuotient = x / y;\n\n        System.out.println(\"a = \" + a + \", b = \" + b);\n        System.out.println(\"Sum: \" + sum);\n        System.out.println(\"Difference: \" + diff);\n        System.out.println(\"Product: \" + product);\n        System.out.println(\"Integer Quotient: \" + quotient);\n        System.out.println(\"Remainder: \" + remainder);\n        System.out.printf(\"Float Quotient: %.2f%\", floatQuotient);\n    }\n}"
  },
  {
    "id": "TaskMike",
    "filename": "TaskMike.java",
    "raw": "/*\n@output\nx = 10, y = 7\nx == y : false\nx != y : true\nx > y  : true\nx <= y : false\nx == 10 : true\n\n@variables\nisEqual = false\nisNotEqual = true\nisGreater = true\nisLessOrEqual = false\nisEqualToItself = true\n*/\npublic class TaskMike {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 7;\n\n        boolean isEqual = (x == y);\n        boolean isNotEqual = (x != y);\n        boolean isGreater = (x > y);\n        boolean isLessOrEqual = (x <= y);\n        boolean isEqualToItself = (x == 10);\n\n        System.out.println(\"x = \" + x + \", y = \" + y);\n        System.out.println(\"x == y : \" + isEqual);\n        System.out.println(\"x != y : \" + isNotEqual);\n        System.out.println(\"x > y  : \" + isGreater);\n        System.out.println(\"x <= y : \" + isLessOrEqual);\n        System.out.println(\"x == 10 : \" + isEqualToItself);\n    }\n}"
  },
  {
    "id": "TaskNovember",
    "filename": "TaskNovember.java",
    "raw": "/*\n@output\nage = 19\nhasID = true\nhasTicket = false\ncanEnterClub: true\ncanWatchMovie: true\nisDenied: false\ncomplexCheck: true\n\n@variables\ncanEnterClub = true\ncanWatchMovie = true\nisDenied = false\ncomplexCheck = true\n*/\npublic class TaskNovember {\n    public static void main(String[] args) {\n        int age = 19;\n        boolean hasID = true;\n        boolean hasTicket = false;\n\n        boolean canEnterClub = (age >= 18) && hasID;\n        boolean canWatchMovie = (age >= 13) || hasTicket;\n        boolean isDenied = !canEnterClub;\n        boolean complexCheck = (age > 17 && hasID) || (hasTicket && age > 21);\n\n        System.out.println(\"age = \" + age);\n        System.out.println(\"hasID = \" + hasID);\n        System.out.println(\"hasTicket = \" + hasTicket);\n        System.out.println(\"canEnterClub: \" + canEnterClub);\n        System.out.println(\"canWatchMovie: \" + canWatchMovie);\n        System.out.println(\"isDenied: \" + isDenied);\n        System.out.println(\"complexCheck: \" + complexCheck);\n    }\n}"
  },
  {
    "id": "TaskOscar",
    "filename": "TaskOscar.java",
    "raw": "/*\n@output\nWelcome to Tech Haven!\n\n@variables\nisLoyalMember = true\nqualifiesForDiscount = true\nsubtotal = 2400.00\ndiscount = 240.00\ntaxedAmount = 172.8000\nfinalTotal = 2332.80\nMEMBER_DISCOUNT_YEARS = 2\n*/\npublic class TaskOscar {\n    static final double TAX_RATE = 0.08;\n    static final String SHOP_NAME = \"Tech Haven\";\n\n    public static void main(String[] args) {\n        final int MEMBER_DISCOUNT_YEARS = 2;\n\n        String customerName = \"Diego\";\n        int yearsAsMember = 3;\n        float itemPrice = 1200.0f;\n        int quantity = 2;\n\n        System.out.println(\"Welcome to \" + SHOP_NAME + \"!\");\n\n        boolean isLoyalMember = (yearsAsMember >= MEMBER_DISCOUNT_YEARS);\n        float subtotal = itemPrice * quantity;\n        boolean qualifiesForDiscount = isLoyalMember && (subtotal > 1000);\n        float discount = subtotal * 0.10f * (qualifiesForDiscount ? 1 : 0);\n        float taxedAmount = (float) ((subtotal - discount) * TAX_RATE);\n        float finalTotal = subtotal - discount + taxedAmount;\n    }\n}"
  },
  {
    "id": "TaskPapa",
    "filename": "TaskPapa.java",
    "raw": "/*\n@output\nInitial value of a: 5\nInitial value of b: 5\nInitial value of c: 10\nInitial value of d: 10\n\nUpdated value of a: 4\nUpdated value of b: 6\nUpdated value of c: 11\nUpdated value of d: 9\n\nsum = ++p + q++ : 9\nfinal p: 5\nfinal q: 5\n\n@variables\na = 4\nb = 6\nc = 11\nd = 9\np = 5\nq = 5\nsum = 9\n*/\npublic class TaskPapa {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 5;\n        int c = 10;\n        int d = 10;\n\n        System.out.println(\"Initial value of a: \" + a);\n        System.out.println(\"Initial value of b: \" + b);\n        System.out.println(\"Initial value of c: \" + c);\n        System.out.println(\"Initial value of d: \" + d);\n        System.out.println();\n\n        a--;\n        ++b;\n        c++;\n        --d;\n\n        System.out.println(\"Updated value of a: \" + a);\n        System.out.println(\"Updated value of b: \" + b);\n        System.out.println(\"Updated value of c: \" + c);\n        System.out.println(\"Updated value of d: \" + d);\n        System.out.println();\n\n        int p = 4;\n        int q = 4;\n        int sum = ++p + q++;\n\n        System.out.println(\"sum = ++p + q++ : \" + sum);\n        System.out.println(\"final p: \" + p);\n        System.out.println(\"final q: \" + q);\n    }\n}"
  },
  {
    "id": "TaskQuebec",
    "filename": "TaskQuebec.java",
    "raw": "/*\n@output\ninitial total: 20\n35->27->81->20->0\n\ninitial balance: 100.00\nfinal balance: 65.12\n\n@variables\ntotal = 0\nbalance = 65.12\n*/\npublic class TaskQuebec {\n    public static void main(String[] args) {\n        int total = 20;\n        System.out.println(\"initial total: \" + total);\n\n        total += 15;\n        System.out.print(total + \"->\");\n\n        total -= 8;\n        System.out.print(total + \"->\");\n\n        total *= 3;\n        System.out.print(total + \"->\");\n\n        total /= 4;\n        System.out.print(total + \"->\");\n\n        total %= 5;\n        System.out.println(total + \"\\n\");\n\n        float balance = 100.0f;\n        System.out.printf(\"initial balance: %.2f%\\n\", balance);\n\n        balance += 50.5f;\n        balance -= 20.25f;\n        balance *= 2;\n        balance /= 4;\n\n        System.out.printf(\"final balance: %.2f%\\n\", balance);\n    }\n}"
  },
  {
    "id": "TaskRomeo",
    "filename": "TaskRomeo.java",
    "raw": "/*\n@output\nage = 19, hasID = true, hasTicket = false\ncanEnterClub: true\ncanWatchMovie: true\nisDenied: false\ncomplexCheck: true\n\n@variables\ncanEnterClub = true\ncanWatchMovie = true\nisDenied = false\ncomplexCheck = true\n*/\npublic class TaskRomeo {\n    public static void main(String[] args) {\n        int age = 19;\n        boolean hasID = true;\n        boolean hasTicket = false;\n\n        boolean canEnterClub = (age >= 18) && hasID;\n        boolean canWatchMovie = (age >= 13) || hasTicket;\n        boolean isDenied = !canEnterClub;\n        boolean complexCheck = (age > 17 && hasID) || (hasTicket && age > 21);\n\n        System.out.println(\"age = \" + age + \", hasID = \" + hasID + \", hasTicket = \" + hasTicket);\n        System.out.println(\"canEnterClub: \" + canEnterClub);\n        System.out.println(\"canWatchMovie: \" + canWatchMovie);\n        System.out.println(\"isDenied: \" + isDenied);\n        System.out.println(\"complexCheck: \" + complexCheck);\n    }\n}"
  },
  {
    "id": "TaskSierra",
    "filename": "TaskSierra.java",
    "raw": "/*\n@output\nWelcome to Tech Haven!\nCustomer: \"Diego\"\nQuantity: 2\nSubtotal: 2400.00\nIs loyal member: 1\nDiscount: 240.00\nTax: 172.8000\nFinal Total: 2332.80\nHave a great day, Diego!\n\n@variables\nisLoyalMember = 1\nqualifiesForDiscount = 1\nsubtotal = 2400.00\ndiscount = 240.00\ntaxedAmount = 172.8000\nfinalTotal = 2332.80\nMEMBER_DISCOUNT_YEARS = 2\n*/\npublic class TaskSierra {\n    static final double TAX_RATE = 0.08;\n    static final String SHOP_NAME = \"Tech Haven\";\n\n    public static void main(String[] args) {\n        final int MEMBER_DISCOUNT_YEARS = 2;\n\n        String customerName = \"Diego\";\n        int yearsAsMember = 3;\n        float itemPrice = 1200.0f;\n        int quantity = 2;\n\n        System.out.println(\"Welcome to \" + SHOP_NAME + \"!\");\n        System.out.println(\"Customer: \\\"\" + customerName + \"\\\"\");\n\n        boolean isLoyalMember = (yearsAsMember >= MEMBER_DISCOUNT_YEARS);\n        float subtotal = itemPrice * quantity;\n        boolean qualifiesForDiscount = isLoyalMember && (subtotal > 1000);\n        float discount = subtotal * 0.10f * (qualifiesForDiscount ? 1 : 0);\n        float taxedAmount = (float) ((subtotal - discount) * TAX_RATE);\n        float finalTotal = subtotal - discount + taxedAmount;\n\n        System.out.println(\"Quantity: \" + quantity);\n        System.out.printf(\"Subtotal: %.2f%\\n\", subtotal);\n        System.out.println(\"Is loyal member: \" + (isLoyalMember ? 1 : 0));\n        System.out.printf(\"Discount: %.2f%\\n\", discount);\n        System.out.printf(\"Tax: %.4f%\\n\", taxedAmount);\n        System.out.printf(\"Final Total: %.2f%\\n\", finalTotal);\n        System.out.println(\"Have a great day, \" + customerName + \"!\");\n    }\n}"
  }
]);
