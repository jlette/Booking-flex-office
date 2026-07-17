<div align="center">

# Booking Flex Office

**Plateforme web de réservation de bureaux en flex office**

Projet tuteuré — Licence Professionnelle Métiers de l'Informatique : Applications Web
IUT d'Évry / Université Paris-Saclay · Commanditaire : **RTE** · Soutenance : juin 2023

![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=flat&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Inertia.js](https://img.shields.io/badge/Inertia.js-9553E9?style=flat&logo=inertia&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white)

</div>

---

## Contexte

Dans une organisation en **flex office**, aucun poste de travail n'est attribué : les collaborateurs s'installent où ils le souhaitent selon leurs besoins. Le constat qui motive cette organisation est simple — un bureau attribué n'est occupé qu'à **60 % en moyenne** et reste vacant le reste du temps.

RTE, pionnière dans l'expérimentation du flex office, souhaitait fiabiliser cette pratique. Sans outil, deux problèmes se posent : les collaborateurs n'ont aucune visibilité sur les places disponibles, et l'entreprise aucune donnée pour piloter l'occupation réelle de ses locaux.

**Booking Flex Office** répond à ce besoin avec une plateforme de réservation pensée comme un site de réservation de places de cinéma : on choisit une date, un créneau, un étage, puis une place sur un plan visuel. Côté administration, l'outil produit les statistiques d'occupation qui permettent d'optimiser les espaces.

## Stack technique

| Couche | Technologie |
|---|---|
| Back-end | Laravel (PHP) |
| Front-end | ReactJS |
| Liaison back / front | Inertia.js |
| Base de données | MySQL — modélisation avec JMerise |
| Envoi de mails | Mailtrap |
| Versioning | GitLab |

L'application suit une **architecture MVC** : chaque fonctionnalité a été spécifiée modèle par modèle, vue par vue et contrôleur par contrôleur avant développement.

## Fonctionnalités

### Espace utilisateur

- **Réservation** — sélection d'une date, d'un créneau horaire (H1 à H4, matin, après-midi ou journée) et d'un étage
- **Plan des places en color-coding** — vert (libre), rouge (occupée), bleu (ma place)
- **Confirmation par mail** automatique à chaque réservation
- **Mes réservations** — consultation, tri antichronologique et annulation
- **Recherche de collègue** — autocomplétion sur les noms, affichage des réservations du collègue pour savoir où il se trouve
- **Mon compte** — modification des informations personnelles, du mot de passe, suppression du compte
- **Mode clair / sombre / automatique**

### Espace administrateur

- **Tableau de bord** — nombre de réservations et d'inscriptions sur la semaine et le mois, avec pourcentages d'évolution ; derniers inscrits, dernières réservations, dernières places ajoutées
- **Gestion des places** — ajout, édition, nombre de places par étage
- **Gestion des comptes employés** — création, consultation détaillée, modification
- **Suivi des réservations** — vue complète et suppression
- **Gestion des rôles** — création, édition, suppression

### Authentification

- Connexion, inscription et réinitialisation du mot de passe par mail (lien valable 60 minutes)
- **Restriction du domaine** — seules les adresses en `@rte-france.com` peuvent créer un compte
- Vérification obligatoire de l'adresse mail après inscription

## Modèle de données

Quatre entités structurent l'application :

| Table | Rôle |
|---|---|
| `users` | employés — nom, username, fonction, email, mot de passe, rôle |
| `roles` | rôles applicatifs (utilisateur / administrateur) |
| `place` | places physiques — numéro de place, numéro d'étage |
| `reservation` | réservations — date, créneaux (`h1`–`h4`, `matin`, `apresmidi`, `journee`), liens vers l'utilisateur et la place |

Relations : une réservation lie **un utilisateur** à **une place** (`reservation_users` 0,n et `reservation_place` 0,n) ; un utilisateur **possède** un rôle (1,1).

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/jlette/Booking-flex-office.git
cd Booking-flex-office

# Dépendances PHP et JavaScript
composer install
npm install

# Configuration
cp .env.example .env
php artisan key:generate
```

Renseigner ensuite la connexion MySQL et les identifiants Mailtrap dans le fichier `.env` :

```env
DB_DATABASE=booking_flex_office
DB_USERNAME=root
DB_PASSWORD=

MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=votre_identifiant
MAIL_PASSWORD=votre_mot_de_passe
```

```bash
# Base de données
php artisan migrate --seed

# Lancement (deux terminaux)
php artisan serve
npm run dev
```

L'application est accessible sur `http://localhost:8000`.

## Organisation du projet

Projet mené **en équipe de trois** sur 19 semaines (janvier – juin 2023), avec cahier des charges, planning de Gantt individuel et budget prévisionnel.

**Ma contribution — back-end et base de données (38 jours) :**

| Tâche | Charge |
|---|---|
| Back-end — compte, connexion, inscription | 15 j |
| Modélisation et mise en œuvre de la base de données | 11 j |
| Rédaction du cahier des charges | 6 j |
| Back-end — réservation | 4 j |
| Recette et tests du site | 2 j |

Concrètement : conception du MCD sous JMerise, développement du `ReservationPlaceController` (récupération des places et réservations, validation des données, création et suppression de réservations, recherche de collègues), mise en place des notifications par mail à la confirmation, et développement du module d'authentification.

## Bilan et perspectives

L'application livrée couvre l'intégralité des fonctionnalités du cahier des charges, pour les deux espaces.

Pistes d'évolution identifiées à la soutenance :

- Fonctionnalités avancées de planification et de gestion des espaces
- Notifications en temps réel pour faciliter la coordination entre équipes
- Tests automatisés et intégration continue

---

<div align="center">
<sub>Projet académique réalisé dans un cadre pédagogique — non affilié à RTE.</sub>
</div>
