// IR Obstacle Avoidance Sensor with Arduino
// Detects movement/activity near the sensor

int sensorPin = 2;   // Connect OUT pin of sensor to digital pin 2
int ledPin = 13;     // Built-in LED for indication
int pestCount = 0;   // Counter for detected pests

void setup() {
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int sensorValue = digitalRead(sensorPin);

  if (sensorValue == LOW) {
    // LOW means obstacle detected (depends on module wiring)
    digitalWrite(ledPin, HIGH);  // Turn LED ON
    pestCount++;
    Serial.print("Pest detected! Total count: ");
    Serial.println(pestCount);
    delay(500);  // Debounce delay to avoid multiple counts for one pass
  } else {
    digitalWrite(ledPin, LOW);   // No obstacle
  }
}
