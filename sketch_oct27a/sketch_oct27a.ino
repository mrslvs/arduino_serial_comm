#include <Servo.h>

Servo servo;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9060);
  servo.attach(10);
  servo.write(100);
}

void loop() {
  // put your main code here, to run repeatedly:

  if(Serial.available() > 0){
    int receivedByte = Serial.read();
    // char c = (uint8_t) receivedByte;
    Serial.write(receivedByte);
    servo.write(180);
  }

  for(int i = 0; i<10; i++){
  Serial.print(i);
  }
  Serial.println();

}
