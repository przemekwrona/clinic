FROM openjdk:11

WORKDIR /apps/clinic-service

COPY target/*.jar clinic-service.jar

EXPOSE 8080

ENV PROFILE=''

ENTRYPOINT java -Dspring.profiles.active=${PROFILE} -jar clinic-service.jar
