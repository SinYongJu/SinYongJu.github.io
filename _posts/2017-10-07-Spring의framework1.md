---
layout: post
title:  "Spring framework 1"
icon:  heart-o
category : [java,spring]
---

프레임워크란

  '틀'이라고 생각해보자! 시스템을 개발 하는 과정에서 개발자들이 제각각 다르다면 어떨까
만드는 것은 둘째치고 유지보수나 나중에 어떤 상황이 생기고 만든 개발자가 없다면, 분명 꺼림칙할 것이다.

이러한 문제들의 해결책은 프레임워크다. 프레임워크는 이러한 특정한 것을 개발할때 기본이 되는 back-bone이다.
프레임워크가 제공하는 기본 뼈대에 개발자는 살을 붙여 나간다면, 일관적인 개발이 가능해진다.

장점

빠른 개발 시간 : 기본 back-bone을 제공하므로 개발자는 business logic만 구현 하면 됨.  

쉬운 관리 : 같은 프레임워크가 적용된 app들은 아케텍처가 같으므로 유지보수에 용의

개발자 역량의 획일화 : 초보자든 베테랑이든 프레임워크의 사용으로 코드가 비슷해 지므로 인력적인 측면에서 효율적임.

검증된 아키텍처의 재사용과 일관성 유지 : 이미 검증된 아키텍처 이므로 검증없이 개발가능, 이렇게 개발되면 시간이 지나도 유지보수 과정에서
아키텍처의 왜곡 변형이 없다.


Spring framework : java 기반 의 특징
(기존 ejb; Enterprise Java Beans;의 개발은 비싸며, 어렵고 스펙이 복잡하므로 유지보수가 비효율 적임, 특히 성능유지나, 유지보수의 편의성을 위해서는
  디자인 패턴을 이해 적용 가능해야 함.)
POJO: plane old java object => 쉽게 평범한 자바 객체를 의미한다. 어떤한 규칙이나 클래스에 종속되지 않음.

Ex: Servlet class의 경우 1-javax.servlet, javax.servlet.http 패키지를 import해야한다.
                        2-public 클래스의 선언
                        3-Servlet, GenericServlet, HttpServlet 중 하나를 상속해야 한다.
                        4-기본 constructor가 존재해야합니다.
                        5-life cycle에 해당하는 method들을 overriding해야합니다.

특징!

light-weight(경량) : 1.여러개의 모듈로 구성됨, 각 모듈은 하나 이상의 jar(java archive; 클래스들이 이용하는 클래스 파일과 이용 리소들 및 메타데이터 들을 파일로 모은것 )로 구성됨, 몇 개의 jar 파일만 있으면 된다.
                    2. POJO를 다루므로 ejb 객체보다 관리가 쉽다.

Inversion of Control : (비지니스 컴포넌트를 개발 시, 항상 신경 쓰는 것이 바로 낮은 결합도돠 높은 응집률임)
                    Ioc의 적용전 의존 관계(객체와 객체 사이)를 개발자가 직접적으로 코드로 처리하였다. ioc 적용 후 객체의 생성을
                    자바 코드 처리가 아닌 컨테이너가 처리함.
                    필자 생각: 초보자의 입장에서는 봤을 때 간단히 Spring의 사용으로 new라는 초기화 선언을 container가 처리해줌, 즉,
                    비지니스 컴포넌트를 구현시 객체 생성 (new) 코드처리를 안해도 된다는 것은 만들어놓은 비지니스 컴포넌트를 사용하든 안하든
                    추가 제거가 자유로워 질 수 있다.  

Aspect-Oriented Programming, AOP : 비지니스 메서드를 개발시, 핵심 비지니스 로직과 각 비시니스 메서드 소스마다 반복 등장하는 공통로직을 분리
  ----> 응집도(만드려는 비지니스 메서드에 집중 한다고 생각하자! 순도 몇퍼 이런 의미로?!) 가 높게 개발 가능.
  관점지향 프로그래밍 :공통 기능들을 외부의 독립된 클래스로 분리, 해당기능을 선언적으로 처리함!


container : 컨테이너는 특정 객체의 생성과 관리르 담당하며 객체 운용에 필요한 다양한 기능을 제공.
컨테이너는 일반적으로 서버안에 포함되어 배포 및 구동됨.



====>정리 결합도를 낮춰 유지 보수를 쉽게, 비지니스 메서드의 응집도를 높임!





IOC container :
제어의 역행이란 일련의 작업들을 소스코드가 아닌 컨테이너가 처리하는 것을 의미.
객체의 생성과 의존 관계에 대한 코드가 사라져 낮은 결합도의 컴포넌트를 구현 가능함!

Polymorphism 의 이용 Designed pattern의 이용; keyword 찾아보세요!


서블릿 container는 WEB-INF/web.xml의 파일 로딩하여 구동함.

Spring container는 applicationContext.xml에 등록된 <beans>라는 루트엘리먼트와 네임스페이스 관련 설정들을 읽어와서 작동된다.

종류 :

BeanFactory(bean 객체 생성 관리)와 이를 상속한 ApplicationContext(트랙젝현 과리나 메시지 기반의 다국어 처리).

ApplicationContext의 구현 클래스
-GenericXmlApplicationContext : 파일 시스템이나 클래스 경로에 있는 xml 설정 파일을 구동하는 컨테이너
-XmlWebApplicationContext : 웹 기반의 스프링 앱을 개발시 사용하는 컨테이너.




정리: Spring은 POJO, AOP, container의 사용으로 낮은 결합도, 높은 응집도의 비지니스 컴포넌트의 개발이 가능 하다.

그래서 일률적이고 유지보수에 용의 하다.

스프링의 가장 큰 특징은 객체의 생성과 의존 관계를 컨테이너가 자동으로 관리한다는 점이다 IOC.
