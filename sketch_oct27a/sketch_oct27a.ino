#include <Servo.h>

Servo servo;

int count = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9060);
  servo.attach(10);
  servo.write(50);
}

void loop() {
  // put your main code here, to run repeatedly:

  if(Serial.available() > 0){
    int receivedByte = Serial.read();
    // char c = (uint8_t) receivedByte;
    Serial.write(receivedByte);
    servo.write(180);
  }

  Serial.println(count);
  count ++;
  delay(1000);

}
