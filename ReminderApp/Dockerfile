FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ReminderApp.csproj", ""]
RUN dotnet restore "./ReminderApp.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "ReminderApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ReminderApp.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ReminderApp.dll"]
