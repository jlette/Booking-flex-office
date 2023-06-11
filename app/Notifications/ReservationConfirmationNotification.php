<?php

namespace App\Notifications;

use App\Models\Reservation;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ReservationConfirmationNotification extends Notification
{
    use Queueable;

    protected $reservation;

    /**
     * Create a new notification instance.
     *
     * @param Reservation $reservation
     * @return void
     */
    public function __construct(Reservation $reservation)
    {
        $this->reservation = $reservation;

    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $trancheHoraire = '';

        if ($this->reservation->h1) {
            $trancheHoraire = '8h-10h';
        } elseif ($this->reservation->h2) {
            $trancheHoraire = '10h-12h';
        } elseif ($this->reservation->h3) {
            $trancheHoraire = '13h-15h';
        } elseif ($this->reservation->h4) {
            $trancheHoraire = '15h-17h';
        } elseif ($this->reservation->matin) {
            $trancheHoraire = 'Matin';
        } elseif ($this->reservation->apresmidi) {
            $trancheHoraire = 'Après-midi';
        } elseif ($this->reservation->journee) {
            $trancheHoraire = 'Journée';
        }


        return (new MailMessage)
        ->subject('Confirmation de réservation')
        ->line('Votre réservation a été confirmée.')
        ->line('Détails de la réservation :')
        ->line('Date : '.$this->reservation->date->format('d-m-Y'))
        ->line('L\'horaire choisi est : '.$trancheHoraire)
        ->line('A la place '.$this->reservation->place->numplace . ' et à l\'étage ' . $this->reservation->place->numetage)
        ->line('Merci pour votre réservation. Nous avons hâte de vous accueillir !');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
