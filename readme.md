### Simple Neural Network

## Description
This is a simple neural network, built using keras, that uses a 7-segment display to show how neural network predicts a value based on inputs. Each segment is mapped to the input data of the Neural network, that uses the following configuration:

1. Input Neurons: 7
2. Output Neurons: 10
3. Optimizer: Adam
4. Loss Function: Mean Squared Error

This NN uses one-hot encoding to predict the output value. This means that we will obtain 10 probabilities and the index of the highest one will return the predicted value.

## Instructions for using

1. Click on each segment for On/Off, this will map a binary value corresponding to the selected segment.
2. All the data of the 7 segment is sent to the Neural Network that will predict the number entered.
3. If no train has been performed, the neural network will return dummy and unprecise data.
4. Try to train the neural network. Try for example 1000 train iterations and check the results!
