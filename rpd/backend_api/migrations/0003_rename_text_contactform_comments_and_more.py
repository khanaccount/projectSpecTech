# Generated by Django 4.2.6 on 2023-10-29 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0002_alter_contactform_number'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contactform',
            old_name='text',
            new_name='comments',
        ),
        migrations.RenameField(
            model_name='contactform',
            old_name='number',
            new_name='phone',
        ),
        migrations.AddField(
            model_name='contactform',
            name='privacyPolicy',
            field=models.BooleanField(default=False, verbose_name='Приватность'),
        ),
    ]
