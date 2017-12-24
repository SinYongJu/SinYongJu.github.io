---
layout: post
title:  "Spring framework 2"
icon:  heart-o
category : [java,spring]
---

스프링 프레임워크에 강려크함은 Container에 의한 객체의 생성과 의존관계에 있다.
Inversion of Control 제어의 역행
소스코드가 아닌 컨테이너에 의한 객체의 생성과 의존관계;


객체 사이의 의존 관계를 스프링 설정 파일에 등록된 정보를 바탕으로 컨테이너가 자동으로 처리
즉 의존성 설정을 바꾸고 싶을 때는 스프링의 설정 파일 수정만드로 변경 적용

Dependency Injection
컨테이너가 직접 객체들 사이에 의존 관계를 처리하는 것을 의미 setter 메서드를 기반으로 세터 인젝션,
생성자 기반으로 하는 생성자 인젝션

Dependency란 객체와 객체의 결합 관계이다. 하나의 객체에서 다른 객체의 변수나 메서드를 이용하려면 이용 하려는
객체에 대한 객체 생성과 관련된 객체의 레퍼런스 정보가 필요.
