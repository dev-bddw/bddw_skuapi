from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class UsersConfig(AppConfig):
    name = "bddw_skuapi.users"
    verbose_name = _("Users")

    def ready(self):
        try:
            import bddw_skuapi.users.signals  # noqa F401
        except ImportError:
            pass
