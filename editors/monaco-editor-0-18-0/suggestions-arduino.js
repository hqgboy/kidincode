function getFunctions()
{
    // 动态获取函数的原型
}

function getLibraries()
{
    var libraries = [];

    // 读取Arduino库文件
    var mydata = JSON.parse(libs);

    for (var i = 0; i < mydata.length; i++)
    {
        let libObj  =
        {
            label: 'include ' + mydata[i].lib,
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: '#include <' + mydata[i].lib + '>',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: ''
        };

        // 添加动态解析的部分
        libraries.push(libObj);
    }

    return libraries;
}

function getSuggestions()
{
    var suggestions_arduino = 
    [
        /****   函数   ****/
        // Digital I/O
        {
            label: 'pinMode(pin, mode)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'pinMode(${1:pin}, ${2:mode});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Configures the specified pin to behave either as an input or an output. '
        },
        {
            label: 'digitalRead(pin)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'digitalRead(${1:pin});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Reads the value from a specified digital pin, either HIGH or LOW.'
        },
        {
            label: 'digitalWrite(pin, value)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'digitalWrite(${1:pin}, ${2:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Write a HIGH or a LOW value to a digital pin.'
        },
        // Analog I/O
        {
            label: 'analogRead(pin)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'analogRead(${1:pin});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Reads the value from the specified analog pin. '
        },
        {
            label: 'analogWrite(pin, value)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'analogWrite(${1:pin}, ${2:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Writes an analog value (PWM wave) to a pin. '
        },
        {
            label: 'analogReference(type)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'analogReference(${1:type});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Configures the reference voltage used for analog input (i.e. the value used as the top of the input range). '
        },
        // Zero, Due & MKR Family
        {
            label: 'analogReadResolution(bits)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'analogReadResolution(${1:bits});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'analogReadResolution() is an extension of the Analog API for the Arduino Due, Zero and MKR Family.'
        },
        {
            label: 'analogWriteResolution(bits)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'analogWriteResolution(${1:bits});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'analogWriteResolution() is an extension of the Analog API for the Arduino Due.'
        }, 
        //Advanced I/O
        {
            label: 'noTone(pin)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'noTone(${1:pin});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Stops the generation of a square wave triggered by tone(). Has no effect if no tone is being generated.'
        },
        {
            label: 'pulseIn(pin, value)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'pulseIn(${1:pin}, ${2:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Reads a pulse (either HIGH or LOW) on a pin. '
        },
        {
            label: 'pulseIn(pin, value, timeout)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'pulseIn(${1:pin}, ${2:value}, ${3:timeout});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Reads a pulse (either HIGH or LOW) on a pin. '
        },
        {
            label: 'pulseInLong(pin, value)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'pulseInLong(${1:pin}, ${2:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'pulseInLong() is an alternative to pulseIn() which is better at handling long pulse and interrupt affected scenarios.'
        },
        {
            label: 'pulseInLong(pin, value, timeout)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'pulseInLong(${1:pin}, ${2:value}, ${3:timeout});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'pulseInLong() is an alternative to pulseIn() which is better at handling long pulse and interrupt affected scenarios.'
        },
        {
            label: 'shiftIn(dataPin, clockPin, bitOrder)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'shiftIn(${1:dataPin}, ${2:clockPin}, ${3:bitOrder});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Shifts in a byte of data one bit at a time. '
        },
        {
            label: 'shiftOut(dataPin, clockPin, bitOrder, value)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'shiftOut(${1:dataPin}, ${2:clockPin}, ${3:bitOrder}, ${4:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Shifts out a byte of data one bit at a time. '
        },
        {
            label: 'tone(pin, frequency)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'tone(${1:pin}, ${2:frequency});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Generates a square wave of the specified frequency (and 50% duty cycle) on a pin. '
        },
        {
            label: 'tone(pin, frequency, duration)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'tone(${1:pin}, ${2:frequency}, ${3:duration});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Generates a square wave of the specified frequency (and 50% duty cycle) on a pin. '
        },
        // Time
        {
            label: 'delay(ms)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'delay(${1:ms});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Pauses the program for the amount of time (in milliseconds) specified as parameter. '
        },
        {
            label: 'delayMicroseconds(us)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'delayMicroseconds(${1:us});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Pauses the program for the amount of time (in microseconds) specified by the parameter. '
        },
        {
            label: 'micros()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'micros();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:''
        },
        {
            label: 'millis()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'millis();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Returns the number of microseconds since the Arduino board began running the current program. '
        },
        // Math
        {
            label: 'abs(x)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'abs(${1:x});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Calculates the absolute value of a number.'
        },
        {
            label: 'constrain(x, a, b)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'constrain(${1:x}, ${2:a}, ${3:b});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Constrains a number to be within a range.'
        },
        {
            label: 'map(value, fromLow, fromHigh, toLow, toHigh)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'map(${1:value}, ${2:fromLow}, ${3:fromHigh}, ${4:toLow}, ${5:toHigh});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Re-maps a number from one range to another. '
        },
        {
            label: 'max(x, y)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'max(${1:x}, ${2:y});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Calculates the maximum of two numbers.'
        },
        {
            label: 'min(x, y)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'min(${1:x}, ${2:y});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Calculates the minimum of two numbers.'
        },
        {
            label: 'pow(base, exponent)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'pow(${1:base}, ${2:exponent});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Calculates the value of a number raised to a power. '
        },
        {
            label: 'sq(x)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'sq(${1:x});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Calculates the square of a number: the number multiplied by itself.'
        },
        {
            label: 'sqrt(x)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'sqrt(${1:x});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Calculates the square root of a number.'
        },
        // Trigonometry
        {
            label: 'cos(rad)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'cos(${1:rad});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Calculates the cosine of an angle (in radians). The result will be between -1 and 1.'
        },
        {
            label: 'sin(rad)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'sin(${1:rad});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Calculates the sine of an angle (in radians). The result will be between -1 and 1.'
        },
        {
            label: 'tan(rad)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'tan(${1:rad});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Calculates the tangent of an angle (in radians). The result will be between negative infinity and infinity.'
        },
        // Characters
        {
            label: 'isAlpha(thisChar)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'isAlpha(${1:thisChar});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Analyse if a char is alpha (that is a letter). Returns true if thisChar contains a letter.'
        },
        {
            label: 'isAlphaNumeric(thisChar)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'isAlphaNumeric(${1:thisChar});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Analyse if a char is alphanumeric (that is a letter or a numbers). Returns true if thisChar contains either a number or a letter.'
        },
        {
            label: 'isAscii(thisChar)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'isAscii(${1:thisChar});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Analyse if a char is Ascii. Returns true if thisChar contains an Ascii character.'
        },
        {
            label: 'isControl(thisChar)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'isControl(${1:thisChar});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Analyse if a char is a control character. Returns true if thisChar is a control character.'
        },
        {
            label: 'isDigit(thisChar)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'isDigit(${1:thisChar});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Analyse if a char is a digit (that is a number). Returns true if thisChar is a number.'
        },
        {
            label: 'isGraph(thisChar)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'isGraph(${1:thisChar});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Analyse if a char is printable with some content (space is printable but has no content). Returns true if thisChar is printable.'
        },
        {
            label: 'isHexadecimalDigit(thisChar)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'isHexadecimalDigit(${1:thisChar});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Analyse if a char is an hexadecimal digit (A-F, 0-9). Returns true if thisChar contains an hexadecimal digit.'
        },
        {
            label: 'isLowerCase(thisChar)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'isLowerCase(${1:thisChar});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Analyse if a char is lower case (that is a letter in lower case). Returns true if thisChar contains a letter in lower case.'
        },
        {
            label: 'isPrintable(thisChar)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'isPrintable(${1:thisChar});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Analyse if a char is printable (that is any character that produces an output, even a blank space). Returns true if thisChar is printable.'
        },
        {
            label: 'isPunct(thisChar)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'isPunct(${1:thisChar});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Analyse if a char is punctuation (that is a comma, a semicolon, an exlamation mark and so on). Returns true if thisChar is punctuation.'
        },
        {
            label: 'isSpace(thisChar)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'isSpace(${1:thisChar});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Analyse if a char is a white-space character.'
        },
        {
            label: 'isUpperCase(thisChar)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'isUpperCase(${1:thisChar});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Analyse if a char is upper case (that is, a letter in upper case).'
        },
        {
            label: 'isWhitespace(thisChar)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'isWhitespace(${1:thisChar});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Analyse if a char is a space character. '
        },
        // Random Numbers
        {
            label: 'random(max)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'random(${1:max});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'The random function generates pseudo-random numbers.'
        },
        {
            label: 'random(min, max)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'random(${1:min}, ${2:max});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'The random function generates pseudo-random numbers.'
        },
        {
            label: 'randomSeed(seed)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'randomSeed(${1:seed});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'randomSeed() initializes the pseudo-random number generator, causing it to start at an arbitrary point in its random sequence.'
        },
        // Bits and Bytes
        {
            label: 'bit(n)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'bit(${1:n});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Computes the value of the specified bit (bit 0 is 1, bit 1 is 2, bit 2 is 4, etc.).'
        },
        {
            label: 'bit(x, n)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'bit(${1:x}, ${2:n});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Clears (writes a 0 to) a bit of a numeric variable.'
        },
        {
            label: 'bitRead(x, n)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'bitRead(${1:x}, ${2:n});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Reads a bit of a number.'
        },
        {
            label: 'bitSet(x, n)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'bitSet(${1:x}, ${2:n});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Sets (writes a 1 to) a bit of a numeric variable.'
        },
        {
            label: 'bitWrite(x, n, b)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'bitWrite(${1:x}, ${2:n}, ${3:b});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Writes a bit of a numeric variable.'
        },
        {
            label: 'highByte(x)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'highByte(${1:x});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Extracts the high-order (leftmost) byte of a word (or the second lowest byte of a larger data type).'
        },
        {
            label: 'lowByte(x)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'lowByte(${1:x});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Extracts the low-order (rightmost) byte of a variable (e.g. a word).'
        },
        // External Interrupts
        {
            label: 'attachInterrupt(digitalPinToInterrupt(pin), ISR, mode)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'attachInterrupt(${1:digitalPinToInterrupt(pin)}, ${2:ISR}, ${3:mode});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:''
        },
        {
            label: 'attachInterrupt(interrupt, ISR, mode)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'attachInterrupt(${1:interrupt}, ${2:ISR}, ${3:mode});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:''
        },
        {
            label: 'attachInterrupt(pin, ISR, mode) ',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'attachInterrupt(${1:pin}, ${2:ISR}, ${3:mode});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:''
        },
        {
            label: 'detachInterrupt(digitalPinToInterrupt(pin))',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'attachInterrupt(${1:digitalPinToInterrupt(pin)});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:''
        },
        {
            label: 'detachInterrupt(interrupt)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'attachInterrupt(${1:interrupt});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:''
        },
        {
            label: 'detachInterrupt(pin)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'attachInterrupt(${1:pin});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:''
        },
        // Interrupts
        {
            label: 'interrupts()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'interrupts();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Re-enables interrupts (after they’ve been disabled by nointerrupts(). '
        },
        {
            label: 'noInterrupts()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'noInterrupts();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Disables interrupts (you can re-enable them with interrupts()). '
        },
        // Communication
        {
            label: 'Serial.available()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.available();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Get the number of bytes (characters) available for reading from the serial port.'
        },
        {
            label: 'Serial.availableForWrite()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.availableForWrite();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Get the number of bytes (characters) available for writing in the serial buffer without blocking the write operation.'
        },
        {
            label: 'Serial.begin()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.begin(${1:9600});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Sets the data rate in bits per second (baud) for serial data transmission. '
        },
        {
            label: 'Serial.end()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.end();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Disables serial communication, allowing the RX and TX pins to be used for general input and output. '
        },
        {
            label: 'Serial.find(target)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.find(${1:target});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Serial.find() reads data from the serial buffer until the target is found.'
        },
        {
            label: 'Serial.find(target, length)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.find(${1:target}, ${2:length});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Serial.find() reads data from the serial buffer until the target is found.'
        },
        {
            label: 'Serial.findUntil(target, terminal)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.findUntil(${1:target}, ${2:terminal});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Serial.findUntil() reads data from the serial buffer until a target string of given length or terminator string is found.'
        },
        {
            label: 'Serial.flush()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.flush();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Waits for the transmission of outgoing serial data to complete.'
        },
        {
            label: 'Serial.parseFloat()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.parseFloat();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Serial.parseFloat() returns the first valid floating point number from the Serial buffer. parseFloat() is terminated by the first character that is not a floating point number. '
        },
        {
            label: 'Serial.parseFloat(lookahead)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.parseFloat(${1:lookahead});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Serial.parseFloat() returns the first valid floating point number from the Serial buffer. parseFloat() is terminated by the first character that is not a floating point number. '
        },
        {
            label: 'Serial.parseFloat(lookahead, ignore)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.parseFloat(${1:lookahead}, ${2:ignore});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Serial.parseFloat() returns the first valid floating point number from the Serial buffer. parseFloat() is terminated by the first character that is not a floating point number. '
        },
        {
            label: 'Serial.parseInt()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.parseInt();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Looks for the next valid integer in the incoming serial. '
        },
        {
            label: 'Serial.parseInt(lookahead)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.parseInt(${1:lookahead});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Looks for the next valid integer in the incoming serial. '
        },
        {
            label: 'Serial.parseInt(lookahead, ignore)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.parseInt(${1:lookahead}, ${2:ignore});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Looks for the next valid integer in the incoming serial. '
        },
        {
            label: 'Serial.peek()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.peek();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Returns the next byte (character) of incoming serial data without removing it from the internal serial buffer. '
        },
        {
            label: 'Serial.print(val)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.print(${1:val});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Prints data to the serial port as human-readable ASCII text. '
        },
        {
            label: 'Serial.println(val, format)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.println(${1:val}， ${2:format});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'This command takes the same forms as Serial.print().'
        },
        {
            label: 'Serial.println(val, format)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.println(${1:val}， ${2:format});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'This command takes the same forms as Serial.print().'
        },
        {
            label: 'Serial.read()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.read();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Reads incoming serial data.'
        },
        {
            label: 'Serial.readBytes(buffer, length)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.readBytes(${1:buffer}， ${2:length});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Serial.readBytes() reads characters from the serial port into a buffer. '
        },
        {
            label: 'Serial.readBytesUntil(character, buffer, length)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.readBytesUntil(${1:character}， ${2:buffer}, ${3:length});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Serial.readBytesUntil() reads characters from the serial buffer into an array.'
        },
        {
            label: 'Serial.readString()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.readString();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Serial.readString() reads characters from the serial buffer into a String. '
        },
        {
            label: 'Serial.readStringUntil(terminator)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.readStringUntil(${1:terminator});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'readStringUntil() reads characters from the serial buffer into a String.'
        },
        {
            label: 'Serial.setTimeout(time)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.setTimeout(${1:time});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Serial.setTimeout() sets the maximum milliseconds to wait for serial data. It defaults to 1000 milliseconds.'
        },
        {
            label: 'Serial.write(val)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.write(${1:val});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Writes binary data to the serial port. This data is sent as a byte or series of bytes; to send the characters representing the digits of a number use the print() function instead.'
        },
        {
            label: 'Serial.write(str)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.write(${1:str});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Writes binary data to the serial port. This data is sent as a byte or series of bytes; to send the characters representing the digits of a number use the print() function instead.'
        },
        {
            label: 'Serial.write(buf, len)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Serial.write(${1:buf}, ${2:len});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Writes binary data to the serial port. This data is sent as a byte or series of bytes; to send the characters representing the digits of a number use the print() function instead.'
        },
        {
            label: 'Stream.available()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.available();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'available() gets the number of bytes available in the stream.'
        },
        {
            label: 'Stream.read()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.read();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'read() reads characters from an incoming stream to the buffer.'
        },
        {
            label: 'Stream.flush()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.flush();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'flush() clears the buffer once all outgoing characters have been sent.'
        },
        {
            label: 'Stream.find(target)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.find(${1:target});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'find() reads data from the stream until the target is found. '
        },
        {
            label: 'Stream.find(target, length)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.find(${1:target}, ${2:length});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'find() reads data from the stream until the target is found. '
        },
        {
            label: 'Stream.findUntil(target, terminal)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.findUntil(${1:target}, ${2:terminal});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'findUntil() reads data from the stream until the target string of given length or terminator string is found, or it times out.'
        },
        {
            label: 'Stream.peek()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.peek();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Read a byte from the file without advancing to the next one.'
        },
        {
            label: 'Stream.readBytes(buffer, length)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.readBytes(${1:buffer}, ${2:length});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'readBytes() read characters from a stream into a buffer.'
        },
        {
            label: 'Stream.readBytesUntil(character, buffer, length)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.readBytesUntil(${1:character}, ${2:buffer}, ${3:length});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'readBytesUntil() reads characters from a stream into a buffer.'
        },
        {
            label: 'Stream.readString()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.readString();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'readString() reads characters from a stream into a String. '
        },
        {
            label: 'Stream.readStringUntil(terminator)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.readStringUntil(${1:terminator});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'readStringUntil() reads characters from a stream into a String. '
        },
        {
            label: 'Stream.parseInt()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.parseInt();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'parseInt() returns the first valid (long) integer number from the current position.'
        },
        {
            label: 'Stream.parseInt(lookahead)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.parseInt(${1:lookahead});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'parseInt() returns the first valid (long) integer number from the current position.'
        },
        {
            label: 'Stream.parseInt(lookahead, ignore)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.parseInt(${1:lookahead}, ${2:ignore});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'parseInt() returns the first valid (long) integer number from the current position.'
        },
        {
            label: 'Stream.parseFloat()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.parseFloat();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'parseFloat() returns the first valid floating point number from the current position. '
        },
        {
            label: 'Stream.parseFloat(lookahead)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.parseFloat(${1:lookahead});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'parseFloat() returns the first valid floating point number from the current position. '
        },
        {
            label: 'Stream.parseFloat(lookahead, ignore)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.parseFloat(${1:lookahead}, ${2:ignore});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'parseFloat() returns the first valid floating point number from the current position. '
        },
        {
            label: 'Stream.setTimeout(time)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Stream.setTimeout(${1:time});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'setTimeout() sets the maximum milliseconds to wait for stream data, it defaults to 1000 milliseconds. '
        },
        // USB
        {
            label: 'Keyboard.begin()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Keyboard.begin();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'When used with a Leonardo or Due board, Keyboard.begin() starts emulating a keyboard connected to a computer. '
        },
        {
            label: 'Keyboard.end()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Keyboard.end();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Stops the keyboard emulation to a connected computer. To start keyboard emulation, use Keyboard.begin().'
        },
        {
            label: 'Keyboard.press(key)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Keyboard.press(${1:key});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'When called, Keyboard.press() functions as if a key were pressed and held on your keyboard. Useful when using modifier keys.'
        },
        {
            label: 'Keyboard.print(character)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Keyboard.print(${1:character});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Sends a keystroke to a connected computer.'
        },
        {
            label: 'Keyboard.println()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Keyboard.println();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Sends a keystroke to a connected computer, followed by a newline and carriage return.'
        },
        {
            label: 'Keyboard.release(key)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Keyboard.release(${1:key});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Lets go of the specified key. See Keyboard.press() for more information.'
        },
        {
            label: 'Keyboard.releaseAll()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Keyboard.releaseAll();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Lets go of all keys currently pressed. See Keyboard.press() for additional information.'
        },
        {
            label: 'Keyboard.write(character)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Keyboard.write(${1:character});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Sends a keystroke to a connected computer. '
        },
        {
            label: 'Mouse.begin()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Mouse.begin();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Begins emulating the mouse connected to a computer. '
        },
        {
            label: 'Mouse.click()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Mouse.click();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Sends a momentary click to the computer at the location of the cursor. '
        },
        {
            label: 'Mouse.click(button)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Mouse.click(${1:button});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Sends a momentary click to the computer at the location of the cursor. '
        },
        {
            label: 'Mouse.end()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Mouse.end();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Stops emulating the mouse connected to a computer. To start control, use Mouse.begin().'
        },
        {
            label: 'Mouse.move(xVal, yVal, wheel)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Mouse.move(${1:xVal}, ${2:yVal}, ${3:wheel});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Moves the cursor on a connected computer. '
        },
        {
            label: 'Mouse.press()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Mouse.press();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Sends a button press to a connected computer. '
        },
        {
            label: 'Mouse.press(button)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Mouse.press(${1:button});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Sends a button press to a connected computer. '
        },
        {
            label: 'Mouse.release()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Mouse.release();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Sends a message that a previously pressed button (invoked through Mouse.press()) is released. '
        },
        {
            label: 'Mouse.release(button)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Mouse.release(${1:button});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Sends a message that a previously pressed button (invoked through Mouse.press()) is released. '
        },
        {
            label: 'Mouse.isPressed()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Mouse.isPressed();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Checks the current status of all mouse buttons, and reports if any are pressed or not.'
        },
        {
            label: 'Mouse.isPressed(button)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Mouse.isPressed(${1:button});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'Checks the current status of all mouse buttons, and reports if any are pressed or not.'
        },
        // Utilities
        {
            label: 'sizeof(variable)',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'sizeof(${1:variable});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:'The sizeof operator returns the number of bytes in a variable type, or the number of bytes occupied by an array.'
        },
        // Structure
        {
            label: 'loop()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'loop()',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
        },
        {
            label: 'setup()',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'setup()',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
        },
        {
            label: 'define',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: '#define',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
        },
        {
            label: 'include',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: '#include',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
        },
        /****   数据类型   ****/
        {
            label: 'String',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'String',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'bool',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'bool',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'boolean',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'boolean',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'byte',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'byte',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'char',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'char',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'double',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'double',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'float',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'float',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'int',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'int',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'long',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'long',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'short',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'short',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'size_t',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'size_t',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'string',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'string',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'unsigned char',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'unsigned char',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'unsigned int',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'unsigned int',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'unsigned long',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'unsigned long',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'void',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'void',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'word',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'word',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        /****   关键词   ****/
        {
            label: 'const',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'const',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'scope',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'scope',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'static',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'static',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'volatile',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'volatile',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'HIGH',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'HIGH',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'LOW',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'LOW',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'INPUT',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'INPUT',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'OUTPUT',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'OUTPUT',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'INPUT_PULLUP',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'INPUT_PULLUP',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'LED_BUILTIN',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'LED_BUILTIN',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'true',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'true',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'false',
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: 'false',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        /****   语句   ****/
        {
            label: 'break',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'break',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
        },
        {
            label: 'continue',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'continue',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
        },
        {
            label: 'return',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'return',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
        },
        {
            label: 'goto',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'goto',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            label: 'if',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
                'if(${1:condition})',
                '{',
                '\t$2',
                '}'
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'If Statement'
        },
        {
            label: 'if-else',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
                'if(${1:condition})',
                '{',
                '\t$2',
                '}',
                'else',
                '{',
                '\t$3',
                '}'
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'If-Else Statement'
        },
        {
            label: 'switch-case',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
                'switch(${1:var})',
                '{',
                '\tcase ${2:label1}:',
                '\t\t$3',
                '\tbreak;',
                '\tcase ${4:label2}:',
                '\t\t$5',
                '\tbreak;',
                '\tdefault:',
                '\t\t$6',
                '\tbreak;',
                '}'
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'If-Else Statement'
        },
        {
            label: 'for',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
                'for(int i = ${1:0}; i${2:++}; i < ${3:10})',
                '{',
                '\t$0',
                '}'
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'For Statement'
        },
        {
            label: 'while',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
                'while(${1:condition})',
                '{',
                '\t$2',
                '}'
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'While Statement'
        },
        {
            label: 'do-while',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
            'do',
            '${1://do something};',
            'while(${2:condition});'
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Do-While Statement'
        }];

        // 添加库部分
        suggestions_arduino = suggestions_arduino.concat(getLibraries()); 

        // 添加函数部分

        // 返回代码提示
        return suggestions_arduino;
}
