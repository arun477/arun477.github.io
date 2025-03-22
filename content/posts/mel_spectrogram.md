---
title: "Mel Spectrogram"
date: 2025-03-22
draft: true
tags: []
---

Mel spectrogram is a audio analysing technqiue which predominatly applied to raw audio form as preprocessing step before passing to any model for any predictions. for example speech to text models input raw audio is converted into mel spectrogram before passing to the model.


In general mel spectrogram is kind of visuallization technique which takes into account how human ear precive the audio frequencies during this low dimensional conversion process. and generaly this is much lower dimension compared to the raw audio wave form and more natural way human precieve the audio these are all the predominant reason we prefer audio in mel spectrogram form.


To understand fully how this conversion process occurs and what it exactly going on underthehood and understanding more why we need this conversion happening we need to understand few other related concepts and techniques surronding the audio in general.


##### How audio represented digitaly
In physical sense audio singals are continous singal but we usually represent this audio in discrete form when we represent it in digitaly. it basically list of numbers usuall 16 bit integer (if it's a .wav). 

Each number in this list basically recoded amplitude (strength of the physical sound waves) value by the microphone at various time point.

##### Sampling rate
Now here one parameter comes into the picuture which is how many sample should microphone should record in given time period. for example per sec our micropohone record lot of samples then our audio quality would be much better but there is a limit. this is usually 22k samples pers second or 44k samples pers sec, these rates are enough to capture most of the auido frequency and quality. this rate is called **sampling rate**.

##### Nquist theorem (Mathematical gaurantee)
Now another question come is why these choice usually works like 22k samples per sec or  44k smaple per sec. there is one famous mathematical theorem calle **nquist theorem** which strong theoritical garauntees which says that if you want to capture higher frequency then your sampling rate should be 2 times the highest frequency you try to capture. 

$$
f_{max} = \frac{f_s}{2}
$$

$$
f_{max} = \text{highest frequency that can be accurately represented (Nyquist frequency)}\\
f_s = \text{sampling rate (samples per second, Hz)}
$$

Usually human can hearing range is 20 kHz to 20 kHz, so sampling rate of 40 kHz will capture upto 20 kHz, so this enough for mosth of the cases, sometime musics require little higher frequency range so accordingly require higher sampling rate. 

##### Notational meaning difference
There slight notational difference here hz means different thing
when we talk about frequency and sampling rate. when we say 40 kHz we taking about 40k samples pers second and when we say 40 kHz in frequency we are talking about cylcles per second. 

##### Time domain singal
Now this array of singal captures all required information of the audio singal. we can transmit it and play it using speaker. this is called **time domain signal** because it basically singal across the time.

##### Frequency domain singal
One of the interesting and key idea is that we an pick particular instant in time and take the samples from that instant check what are all the frequencies are avialble.

This done through another cool mathematical techqnie called **fourier transform** which takes the samples of the audio at particular instant in time and give all the available frequncy information in that instant. to be exact it will give all the frequncy with it's magnatitude and phase information (usually complex number).

Offcourse maxium frequency it can extract is bound by nquist theorem basically sampling rate / 2 is the maxium frequncy we can extract.


##### Spectrogram
Now if we take this Frequency information for across differnt time instant we will get frequency infomation at each instant of time across the time axis. this called **spectrogram**.

We usually do two addition transformation on this spectrogram.  

Taking only amplitude value. fourier transform return frequency value is complex number which contains both amplitude and phase information of each frequencies. usually we discard phase information and only keep amplitude information. this is done by taking equlidian norm of the real and imaginary part.

Final transform is converting this amplitude value to decibal value basically taking each amplitude value and take log of it. reason seems to be which is closely matches with how human precive the audio amplitude. to be exact following is the transformation formula.


$$
\text{dB} = 20 \log_{10}\left(\frac{|A|}{A_{\text{ref}}}\right)
$$

$$
\text{where:}\\
\text{dB} = \text{amplitude in decibels}\\
|A| = \text{absolute value of amplitude}\\
A_{\text{ref}} = \text{reference amplitude value}\\
\log_{10} = \text{base-10 logarithm}
$$

$$
\text{For spectrograms:}\\
\text{dB} = 10 \log_{10}\left(\frac{|X(f)|^2}{X_{\text{ref}}^2}\right) = 20 \log_{10}\left(\frac{|X(f)|}{X_{\text{ref}}}\right)
$$

$$
\text{where:}\\
X(f) = \text{complex value of the Fourier transform at frequency}\ f\\
|X(f)| = \text{magnitude of the Fourier transform at frequency}\ f\\
X_{\text{ref}} = \text{reference value (often max value or}\ 1.0)
$$


##### Mel spectrogram
The spectrogram we seen so far is gives information about each instant what are all the frequencies and how it changes across the time. 

There is another interesting fact is human can't very well differentiate between higher frequencies the way they do it in lower frequency ranges. baiscally human frequency preception kind of follow lograthimic function which implies if we take one instant of spectrogram frequency informations they usually have linear spaced means 20hz 40hz 60hz etc.. (in this example 20hz apart) but as we move to higher frequency ranges human ear can't distinguish this meaning human ear can distinguish the difference between 20hz and 40hz but it can' betweent 12 kHz and 12.20 kHz. even though same space between both frequencies. so there are lot of unnecessary frequency information (interms human perception point of view).

which implies we can group lot of the frequency based on this idea.











